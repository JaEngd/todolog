import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"

import { signIn } from '../../store/actions/authActions';

import styled from 'styled-components';
import { FaRegPaperPlane } from 'react-icons/fa';

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

const SignIn = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [creds, setCreds] = useState({
        email: "",
        password: "",

    })

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(signIn(creds))
      setCreds({
        email: "",
        password: "",

      })
    }
    
    if(auth._id) return <Navigate to="/" />

    return ( 
    <>
        <StyledForm>
                <FormContainer 
                  noValidate 
                  autoComplete = "off" 
                  onClick={handleSubmit}>
                <StyledInput 
                id="enter-email"
                label="enterEmail" 
                variant="outlined"
                autoFocus
                fullwidth 
                value = {creds.email}
                onChange = {(e) => setCreds({...creds, email: e.target.value})}
                />
            
            <StyledInput 
              id="enter-password"
              type="password"
              label="enterPassword" 
              variant="outlined"
              autoFocus
              fullwidth 
              value = {creds.password}
              onChange = {(e) => setCreds({...creds, password: e.target.value})}
              />
            </FormContainer>

        <ButtonContainer>
            <StyledButton 
            type="submit">
              <SendIcon />
            </StyledButton>
        </ButtonContainer>
        </StyledForm>
    </> 
    );
}
 
export default SignIn;