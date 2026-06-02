import React from "react";
import "../Header.css";

export default function Header(){
    return(

        <header className="header-container">
            <div className="logo-section">
                <img src="/logo.jpg" alt="SoulSisters Logo" className="logo-image"/>
            </div>
            
            <nav className="nav-menu">
                <a className="nav-link" href="#home">Home</a>
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#pillars">Pillars</a>
                <a className="nav-link" href="#events">Events</a>



                <button className="nav-button">Join Us</button>
            </nav>
        </header>
    )

}