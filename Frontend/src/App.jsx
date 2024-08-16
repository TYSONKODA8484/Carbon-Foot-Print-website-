import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home/Home';
import Villages from './Home/Villages';
import Carbon from './Home/Carbon';
import Data from './Home/Data';
import Signup from './components/Signup';
import FullInfo from './Home/FullInfoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/villages' element={<Villages />} />
        <Route path='/carbon' element={<Carbon />} />
        <Route path='/data' element={<Data />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/location/:id' element={<FullInfo />} />
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
