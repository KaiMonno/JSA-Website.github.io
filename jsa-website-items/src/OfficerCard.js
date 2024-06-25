import React from "react";
import OfficerCardCSS from "./OfficerCard.css"

function OfficerCard({ name, role, photo }) {
    return (
      <div className="officer-card">
        <img src={photo} alt={`Officer ${name}`} className="officer-photo" />
        <h3 className="officer-name">{name}</h3>
        <p className="officer-role">{role}</p>
      </div>
    );
  }
  
  
  export default OfficerCard;