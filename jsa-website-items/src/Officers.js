import React from "react";
import OfficersCSS from "./Officers.css";
import OfficersSection from "./OfficerSection";

const Officers = () => {
    
    const officers = [    
        { name: "Yuhki Ueda", role: "Co-Chair", photo: "Yukhi.jpg" },
        { name: "Ellie Hyde", role: "Co-Chair", photo: "Ellie_Hyde.jpeg" },
        { name: "Kai Monno", role: "Secretary", photo: "Kai_Monno.jpeg" },
        { name: "Emi Kawamura", role: "Secretary", photo: "Emi.jpeg" },
        { name: "Julie Liu", role: "Historian", photo: "Julie.jpeg" },
        { name: "Jascha Maeshiro", role: "Treasurer", photo: "Jascha.png" },
        { name: "Natascha Levine", role: "Freshman Rep", photo: "Natascha.jpg" }




    ]
    
  
  return (
        <section id="officers">
          <h1>Our Officers</h1>
          <OfficersSection officers={officers} />

          
        </section>
      );

  }
export default Officers ;
