import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/Home'
import Page from './Pages/Page'
import './App.css';
export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Page' element={<Page/>} />
      </Routes> < />
  );
}