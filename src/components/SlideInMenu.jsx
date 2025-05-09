import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function SlideInMenu() {
   const[isOpen, setIsOpen] = React.useState(false);
   const toggleSidebar = () => {
    setIsOpen(!isOpen)

   }
  return (    
    <div className='sidebar'>
        <div className={`sidebarContent ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Our ready made Suggestions</a></li>
                <li><a href="">Build your own Cake</a></li>
                <li><a href="">Shopping Car</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Log In</a></li>
            </ul>
            </div>
       <div className={isOpen ? 'sidebarIconOpen' : 'sidebarIcon'} onClick={toggleSidebar}>
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