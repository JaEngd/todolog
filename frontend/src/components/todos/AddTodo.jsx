import React from 'react'
import styled from 'styled-components';
import { FaRegPaperPlane } from 'react-icons/fa';

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 30px;
`

export const FormContainer = styled.div`
  display: flex;
  width: 50%;
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

const AddTodo = () => {
    return ( 
    <>
        <StyledForm>
          <FormContainer noValidate autoComplete = "off">
            <StyledInput 
              id="enter-todo"
              label="enterToDo" 
              type="text"
              autoFocus
              fullwidth />
            <StyledButton type="submit">
              <SendIcon />
            </StyledButton>
          </FormContainer>
        </StyledForm>
    </> 
    );
}
 
export default AddTodo;