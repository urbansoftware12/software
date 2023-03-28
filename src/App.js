import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home';
import Hom from '../src/pages/hom';
import Service from '../src/pages/service';
import Brandingpage from './pages/branding';
import Choosepage from './pages/choose';
import Contact from './pages/contact';
import Insight from './pages/insight';
import Marketingpage from './pages/marketing';
import Uxx from './pages/uxx';
import Privacypolic from './pages/privacypolic';
import Cookiepolicy from './pages/cookiepolicy';
import Hoome from './pages/hoome';
const App = () => {
  return (
    <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/service' exact element={<Service />} />
          <Route path='/branding' exact element={<Brandingpage />} />
          <Route path='/whychooseus' exact element={<Choosepage />} />
          <Route path='/contactus' exact element={<Contact />} />
          <Route path='/insight' exact element={<Insight />} />
          <Route path='/marketing' exact element={<Marketingpage />} />
          <Route path='/uxx' exact element={<Uxx/>}/>
          <Route path='/privacypolic' exact element={<Privacypolic/>}/>
          <Route path='/cookiepolicy' exact element={<Cookiepolicy/>}/>
          <Route path='/hom' exact element={<Hom/>}/>
          <Route path='/hoome' exact element={<Hoome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
