import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { TodosList } from './component/todo-list';
import { EditTodo } from './component/edit';
import { CreateTodo } from './component/create-todo';
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
        <BrowserRouter>
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" >
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/"  element={<TodosList/>} />
            <Route path="/edit/:id" element={<EditTodo/>} />
            <Route path="/create" element={<CreateTodo/>} />
          </Routes>
        </div>
        </BrowserRouter>
      
    );
}

export default App;
