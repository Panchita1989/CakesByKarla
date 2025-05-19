import React from 'react'
import '../styles/formWrapper.css'
import '../styles/Contact.css'
import formConfig from "../data/formData.js";
import {useEffect, useState, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import FormComponent from './FormComponent'


export default function FormWrapper(){

    const location = useLocation()

    const getInitialForm = () => {
        if(location.pathname.includes('login')) return 'login'
        if(location.pathname.includes('signeup')) return 'signeup'
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

        //when my from url changes
        
        
        
        if(activeForm !== newForm){
            setDirection(prev =>(prev === 'right' ? 'left' : 'right'))
            setImagePosition(prev =>(prev === 'right' ? 'left' : 'right'))
           
        }

        setActiveForm(newForm)
    }, [location.pathname])
    const image = formConfig[activeForm].image

    return(
        <div className='formWrapper'>
            {imagePosition === 'right' ? (
                <>
                    <div className={`formSection ${direction}`}><FormComponent formData ={formConfig[activeForm]}/></div>
                    <div className={`imageSection ${direction}`}>
                        <img src={formConfig[activeForm].image.src} alt={formConfig[activeForm].image.alt} />
                    </div>
                </>
            ) : (
                <>
                    <div className={`imageSection ${direction}`}>
                        <img src={formConfig[activeForm].image.src} alt={formConfig[activeForm].image.alt} />
                    </div>
                    <div className={`formSection ${direction}`}><FormComponent formData ={formConfig[activeForm]}/></div>
                </>
        
    )

}
</div>
    )
}


