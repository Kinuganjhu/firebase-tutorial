import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Page from './Pages/Page';
import Store from './Pages/Store';
import Profile from './Pages/Profile';

import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Page' element={<Page />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Profile' element={<Profile />} />
      
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}
