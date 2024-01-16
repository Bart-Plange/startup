// src/App.js
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, Work, ServicesPage } from './pages';

import './App.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/work' element={<Work />} />
          <Route path='/servicespage' element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
