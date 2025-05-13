import React from "react"
import Logo from '../assets/images/logo.png'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


export  default function Header(){
    return(
        <header className="header">
            <div className="spacer"></div>
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="socialLinks">
                <ul>
                <Link to='/'><li><FontAwesomeIcon icon={faHouse}/></li></Link>
                <Link to=''><li><FontAwesomeIcon icon = {faInstagram} /></li></Link>
                <Link to=''><li><FontAwesomeIcon icon = {faEnvelope} /></li></Link>
                <Link to=''><li><FontAwesomeIcon icon = {faRightToBracket} /></li></Link>
                </ul>
            </div>
            
        </header>

    )
}