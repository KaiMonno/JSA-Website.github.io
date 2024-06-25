import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import './Navigation.css';

import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
    <nav className="navigation">

        <Link to="/Home" className="nav-item" style={{ marginRight: '1px' , marginBottom: '1px'}}> Home</Link>
        <Link to="/Social" className="nav-item" style={{ marginLeft: '20px' }}> Social</Link>
        <Link to="/Officers" className="nav-item" style={{ marginRight: '1px' , marginTop: '1px'}}> Officers</Link>
        <Link to="/Contact" className="nav-item" style={{ marginRight: '1px' , marginTop: '1px'}}> Contact</Link>

    </nav>
    )
}


export default Navigation;