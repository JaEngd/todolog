import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import styled from 'styled-components';

import Todo from './Todo';
import { getTodos } from '../../store/actions/todoActions';

const Title = styled.h5`
  font-size: 20px;
  text-align: left; 
  color: black;
`;

const ListTodos = ({ setTodo }) => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return ( 
    <>
    <div >
        <Title>
            
        </Title>
        { todos && todos.map((todo) => {
            return (
                <Todo 
                todo={todo}
                key={todo._id}
                setTodo= { setTodo }
                />
            )
        }) }
    </div>
    </> 
    );
}
 
export default ListTodos;