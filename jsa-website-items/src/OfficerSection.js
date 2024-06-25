import React from "react";
import OfficersCSS from "./Officers.css";
import OfficerCard from "./OfficerCard";

function OfficersSection({ officers }) {
    return (
      <section id="officers">
          <img src="Officer_Group_Photo.png" alt="Group of Officers" className="officers-group-photo" />
        <div className="officers-container">
          {officers.map((officer, index) => (
            <OfficerCard key={index} name={officer.name} role={officer.role} photo={officer.photo} />
          ))}
        </div>
      </section>
    );
  }

  export default OfficersSection;