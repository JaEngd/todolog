import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


import styled from 'styled-components';

import Todo from './Todo';
import { getTodos } from '../../store/actions/todoActions';

const Title = styled.h5`
  font-size: 20px;
  text-align: left; 
  color: black;
`;

const ListTodos = ({ todo, setTodo }) => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    if(auth && auth._id) return <Navigate to="/" />

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
                todos={todos}
                />
            )
        }) }
    </div>
    </> 
    );
}
 
export default ListTodos;