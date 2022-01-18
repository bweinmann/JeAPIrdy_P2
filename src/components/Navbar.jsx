import { useNavigate } from 'react-router-dom';
import React from 'react';
import './NavbarStyle.css'

const Navbar = () => {

    let navigate = useNavigate();
    
    
    return (
        <nav className="nav-wrapper">
            <div className="container">
                    <ul>
                       <li className='link' onClick={() => {
                    navigate("/")}}>Home</li>
                       <li className='link' onClick={() => {
                    navigate("/scores")}}>Scores</li>
                    </ul>
            </div>
            </nav>
    )
}

export default Navbar;