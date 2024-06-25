import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', // This aligns items vertically in the center.
        justifyContent: 'flex-start', // This aligns items horizontally to the start.
        padding: '10px'
      }}>
        <img 
          src="JSA Logo.png" 
          alt="Japanese Student Association Logo" 
          style={{ 
            maxWidth: '100px', // Adjust the max width as needed
            maxHeight: '50px', // Adjust the max height as needed
            marginRight: '20px' // This adds space between the logo and the club name
          }} 
        />
        <h1 style={{ 
          fontSize: '1em', // Adjust font size as needed
          margin: '0' // Removes default margin around the h1 element
        }}>
          Japanese Student Association
        </h1>
        <nav>
        <Link to="/Home" style={{ marginRight: '20px', maxHeight: '50px' }}>Home</Link>
    
      </nav>
      </header>
    );
  }
  

export default Header;
