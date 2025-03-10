// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <h1>hi i'm h1</h1>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>}></Route>
      </Routes>
    </>
  );
};

export default App;