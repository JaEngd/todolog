import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';    
import { Navigate } from "react-router-dom"



const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

if(auth && auth._id) return <Navigate to="/signin" />

    return ( 
    <>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ListTodos setTodo={setTodo}/>
    </> 
    );
}
 
export default Todos;