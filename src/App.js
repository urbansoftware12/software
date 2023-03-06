import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home';
import Service from '../src/pages/service';
import Brandingpage from './pages/branding';
const App = () => {
  return (
    <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/service' exact element={<Service />} />
          <Route path='/branding' exact element={<Brandingpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
