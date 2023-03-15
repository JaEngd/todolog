import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { FaRegPaperPlane } from 'react-icons/fa';

import { addTodo } from '../../store/actions/todoActions';

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
  gap: 10px;
  width: 50%;
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
    const dispatch = useDispatch()

    const [ todo, setTodo ] = useState({
      name: "",
      isComplete: false
    })

    const handleSubmit = (e) => {
      
      e.preventDefault()

      dispatch(addTodo(todo))

      setTodo({
        name: "",
        isComplete: false
      })
    }

    return ( 
    <>
        <StyledForm>
          <FormContainer noValidate autoComplete = "off">
            <StyledInput 
              id="enter-todo"
              label="enterToDo" 
              type="text"
              autoFocus
              fullwidth
              value = {todo.name}
              onChange = {(e) => setTodo({...todo, name: e.target.value, date: new Date()})} 
              />
            <StyledButton onClick={ handleSubmit } type="submit">
              <SendIcon />
            </StyledButton>
          </FormContainer>
        </StyledForm>
    </> 
    );
}
 
export default AddTodo;