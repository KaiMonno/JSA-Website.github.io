import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact () {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2>Contact</h2>
      <p>Co-Chair (Ellie Hyde): ehyde@oberlin.edu</p>
      <p>Co-Chair (Yukhi Ueda): yueda@oberlin.edu</p>
      <p>Social Team: jsa@oberlin.edu</p>
      <a href="https://www.instagram.com/jsa_oberlin/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </section>
  );
}

export default Contact ;
