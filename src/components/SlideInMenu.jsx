import React, { useRef } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faCake} from '@fortawesome/free-solid-svg-icons';
import {faCookie} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


export default function SlideInMenu() {
   const[isOpen, setIsOpen] = React.useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef(null);
    
   const toggleSidebar = () => {
    setIsOpen(prev => !prev);
   }
   const handleClickOutside = (event) =>{
    if(isOpen && menuRef.current && !menuRef.current.contains(event.target) &&
    iconRef.current && !iconRef.current.contains(event.target)){
      setIsOpen(false)
    }
   }
   useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    };
   }, [isOpen]);
  return (  
    <>
    <div className='sidebar'>
        <div ref={menuRef} className={`sidebarContent ${isOpen ? 'open' : ''}`}>
            <ul>
              <Link to='/' onClick={()=> setIsOpen(false)}><li><FontAwesomeIcon icon={faHouse}/> Home</li></Link>
              <Link to= '/choose' onClick ={()=> setIsOpen(false)}><li><FontAwesomeIcon icon={faCookie} /> Our Favorite Bakes</li></Link>
              <Link to= '' onClick = {()=> setIsOpen(false)}><li><FontAwesomeIcon icon={faCake} /> Build your own Cake</li></Link>
              <Link to= '' onClick = {()=> setIsOpen(false)}><li><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart</li></Link>
              <Link to= '/contact' onClick = {()=> setIsOpen(false)}><li><FontAwesomeIcon icon={faEnvelope} /> Contact</li></Link>
            </ul>
            </div>
      </div>
      <div ref={iconRef} className={isOpen ? 'sidebarIconOpen' : 'sidebarIcon'} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
        </div> 
        </>  
  )
  
}

























/*<div
      className={`fixed inset-0 z-50 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white shadow-lg p-4`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={onClose}
      >
        Close
      </button>
      <h2 className="text-xl font-bold">Menu</h2>
      <ul className="mt-4">
        <li className="py-2">
          <a href="#section1" className="text-blue-500 hover:underline">
            Section 1
          </a>
        </li>
        <li className="py-2">
          <a href="#section2" className="text-blue-500 hover:underline">
            Section 2
          </a>
        </li>
        <li className="py-2">
          <a href="#section3" className="text-blue-500 hover:underline">
            Section 3
          </a>
        </li>
      </ul>
    </div>
    */