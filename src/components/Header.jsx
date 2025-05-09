import React from "react"
import Logo from '../assets/images/logo.png'

export  default function Header(){
    return(
        <header className="header">
            <div className="spacer"></div>
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="socialLinks">
                <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Log In</a></li>
                </ul>
            </div>
            
        </header>

    )
}