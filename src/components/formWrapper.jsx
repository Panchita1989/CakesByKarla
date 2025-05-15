import React from 'react'
import '../styles/formWrapper.css'
import {useEffect, useState, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import Contact from '../pages/Contact'
import SigneUp from '../pages/SigneUp'
import LogIn from '../pages/LogIn'

export default function FormWrapper(){

    const location = useLocation()

    const getInitialForm = () => {
        if(pathname.includes('login')) return 'login'
        if(pathname.includes('contact')) return 'contact'
        if(pathname.includes('signeup')) return 'signeup'

        return 'contact'
    }
    
    const [activeForm, setActiveForm] = useState(getInitialForm())
    const [imagePosition, setImagePosition] = useState('right')
    const [direction, setDirection] = useState('none')
    const [camefromOutside, setCameFromOutside] = useState(true)

    useEffect(()=> {
        const path = location.pathname

        const newForm = path.includes('login') 
        ? 'login'
        : path.includes('contact')
        ? 'contact'
        : 'signeup'

        if(!activeForm.includes('contact', 'login', 'signeup')){
            setCameFromOutside(true)
        }
        if(activeForm !== newForm){
            if(camefromOutside){
                setDirection('none')
                setCameFromOutside('false')
                imagePosition('right')
            }else{
                imagePosition => !imagePosition
            }
            
            
        }

    })

}