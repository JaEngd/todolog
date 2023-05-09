import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaRegPaperPlane } from 'react-icons/fa';
import { Navigate } from "react-router-dom"

import { signUp } from '../../store/actions/authActions';

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5%;
  gap: 10px; 
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  background-color: #244b5c;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const SendIcon = styled(FaRegPaperPlane)`
  color: white;
`

const SignUp = () => {

    const dispatch = useDispatch() 
    const state = useSelector(state => state)
    const auth = useSelector((state) => state.auth);
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(signUp(user))
      setUser({
        name: "",
        email: "",
        password: "",
      })
    }

    if(auth && auth._id) return <Navigate to="/" />

    return ( 
    <>
        <StyledForm>
                <FormContainer 
                noValidate 
                autoComplete = "off" 
                onSubmit={handleSubmit} 
                >

                <StyledInput 
                id="enter-name"
                label="enterName" 
                variant="outlined"
                placeholder="Name"
                fullwidth 
                value = { user.name }
                onChange = {(e) => setUser({...user, name: e.target.value})}
                />

                <StyledInput 
                id="enter-email"
                label="enterEmail" 
                variant="outlined"
                placeholder="Email"
                fullwidth 
                value = { user.email }
                onChange = {(e) => setUser({...user, email: e.target.value})}
                />
            
             <StyledInput 
              id="enter-password"
              type="password"
              label="enterPassword" 
              variant="outlined"
              placeholder="Password"
              fullwidth
              value = { user.password }
              onChange = {(e) => setUser({...user, password: e.target.value})}
              />
            </FormContainer>

        <ButtonContainer>
            <StyledButton 
            type="submit"
            onClick={handleSubmit}
            >
              <SendIcon />
            </StyledButton>
        </ButtonContainer>
        </StyledForm>
    </> 
    );
}
 
export default SignUp;