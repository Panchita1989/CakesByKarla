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
    <div className='sidebar'>
        <div ref={menuRef} className={`sidebarContent ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faHouse}/> Home</a></li>
                <li><a href=""><FontAwesomeIcon icon={faCookie} /> Our Favorite Bakes</a></li>
                <li><a href=""><FontAwesomeIcon icon={faCake} /> Build your own Cake</a></li>
                <li><a href=""><FontAwesomeIcon icon = {faShoppingCart}/> Shopping Car</a></li>
                <li><a href=""><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                <li><a href=""><FontAwesomeIcon icon={faRightToBracket} /> Log In</a></li>
            </ul>
            </div>
       <div ref={iconRef} className={isOpen ? 'sidebarIconOpen' : 'sidebarIcon'} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
        </div> 
      </div>
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