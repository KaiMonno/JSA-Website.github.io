import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    return (
      <div className="Home" >
      <img src="JSA Logo.png" alt="Japanese Student Association Logo" 
      style={{ 
        maxWidth: '300px', 
        maxHeight: '500px', 
        marginRight: '15px', 
        marginTop: '10px', 
        justifyContent: 'flex-start' 
        
    }} />
    <h1>Japanese Student Association Oberlin College</h1>
    <h2>Our Mission</h2>
    <p>The Oberlin Japanese Student Association aims to promote the understanding of traditional and contemporary Japanese Culture through activities, conversations, and events within a global cultural context. In addition, JSA hopes to foster dialogue on current issues pertaining to people of Japanese descent while celebrating Japanese culture. </p>
    <p> </p>
    <p> </p>
    <p>Follow us!</p>
    <a href="https://www.instagram.com/jsa_oberlin/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    
    );

};

export default Home;