import React from "react"
import Logo from '../assets/images/logo.png'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export  default function Header(){
    return(
        <header className="header">
            <div className="spacer"></div>
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="socialLinks">
                <ul>
                <li><a href="#"><FontAwesomeIcon icon = {faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon = {faEnvelope} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon = {faRightToBracket} /></a></li>
                </ul>
            </div>
            
        </header>

    )
}