import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/LoginForm/Login';
import Form from './components/LoginForm/Form'
import Dashboard from './components/LoginForm/Dashboard'
import Home from './components/Home';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;