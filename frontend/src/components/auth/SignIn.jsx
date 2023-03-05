import React from 'react'
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
    return ( 
    <>
        <StyledForm>
                <FormContainer noValidate autoComplete = "off">
                <StyledInput 
                id="enter-email"
                label="enterEmail" 
                variant="outlined"
                autoFocus
                fullwidth />
            
            <StyledInput 
              id="enter-password"
              type="password"
              label="enterPassword" 
              variant="outlined"
              autoFocus
              fullwidth />
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