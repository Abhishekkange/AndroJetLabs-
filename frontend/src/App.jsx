import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Router>
    
        <Routes>
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Services' element={<Services />} />
        </Routes>
    
    </Router>
    </>
  );
}

export default App;
