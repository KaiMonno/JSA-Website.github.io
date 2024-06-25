import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from 'react-router-dom';
import React from 'react';


import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import Officers from './Officers';
import Social from './Social'


function App() {
  return (
    <div className="App" >
      <Router>
      <header className="header" style={{ 
      display: 'flex', 
      alignItems: 'right', 
     justifyContent: 'flex-start', 
      padding: '1px',
      marginLeft: '10px'
    }}>
      <img src="JSA Logo.png" alt="Japanese Student Association Logo" 
      style={{ 
        maxWidth: '100px', 
        maxHeight: '50px', 
        marginRight: '15px', 
        marginTop: '10px', 
        justifyContent: 'flex-start' 
    }} />
       <h1>JSA Oberlin</h1>
        </header>
        
        <Navigation/>
        <Routes>
            <Route path="/Home" element={<Home />} /> 
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path="/Social" element={<Social />} />
            <Route path="/Officers" element={<Officers />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
