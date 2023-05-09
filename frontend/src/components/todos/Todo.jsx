import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

import moment from "moment"

import { checkTodo, deleteTodo } from '../../store/actions/todoActions';

const Description = styled.p`
  font-size: 15px;
  text-align: left;
  color: black;
`;

const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0px; 
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: white;
`

export const EditIcon = styled(FaPen)`
  color: white;
`

export const DeleteIcon = styled(FaTrash)`
  color: white;
`

export const StyledButton = styled.button`
  background-color: #244b5c;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const IconButton = styled.button`
  background-color: #244b5c;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Todo = ({ todo, setTodo }) => {

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
      setTodo(todo)

      window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"

      })
    }

    const handleCheck = (id) => {
      dispatch(checkTodo(id))
    }

    const handleDelete = (id) => {
      dispatch(deleteTodo(id))
    }
 
    return ( 
    <>
        <TodosWrapper>
            <DescWrapper>
                <Description>
                    {todo.name}
                </Description>
                <Description>
                    Author: {todo.author}
                </Description>
                <Description>
                    Added: { moment(todo.date).fromNow() }
                </Description>
            </DescWrapper>
            <IconWrapper>
                <IconButton type="submit" onClick={() => handleCheck(todo._id)}>
                    <CheckIcon />   
                </IconButton>
                <IconButton type="submit" onClick={ () => handleUpdateClick() }>
                    <EditIcon />   
                </IconButton>
                <IconButton type="submit" onClick={ () => handleDelete(todo._id) }>
                    <DeleteIcon />   
                </IconButton>
            </IconWrapper>
        </TodosWrapper>
    </> 
    );
}
 
export default Todo;