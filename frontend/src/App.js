import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from './store/actions/authActions';

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
        <NavBar/>
        <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<Todos />}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
