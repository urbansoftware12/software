import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home';
import Service from '../src/pages/service';
const App = () => {
  return (
    <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/' exact element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
