import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";  

function App() {
  return (
    <div>
      <BrowserRouter>
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
