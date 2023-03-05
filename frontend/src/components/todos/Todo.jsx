import React from 'react'
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

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

const Todo = () => {
    return ( 
    <>
        <TodosWrapper>
            <DescWrapper>
                <Description>
                    Learn React
                </Description>
                <Description>
                    Author: Jacob
                </Description>
                <Description>
                    Added: 4 days ago
                </Description>
            </DescWrapper>
            <IconWrapper>
                <IconButton type="submit">
                    <CheckIcon />   
                </IconButton>
                <IconButton type="submit">
                    <EditIcon />   
                </IconButton>
                <IconButton type="submit">
                    <DeleteIcon />   
                </IconButton>
            </IconWrapper>
        </TodosWrapper>
    </> 
    );
}
 
export default Todo;