import formConfig from "../data/formData.js";
import {Link} from 'react-router-dom'
import '../styles/contact.css'

export default function FormComponent({formData}) {
    
    return(
        <section className='contact'>
            <div className='wrapperForm'>
                <h2>{formData.title}</h2>
                <Link to={formData.linkTo} className='login' >{formData.option}</Link>
                <form>
                    {formData.fields.map((field)=>{
                    if( field.type === 'textarea') {
                        return (  
                            <textarea        
                                key={field.id}
                                name= {field.name}
                                type= {field.type}
                                rows = {field.rows}
                                required = {field.required}
                            />                        
                        )}  
                    else if(field.type === 'submit'){
                        return(
                            <button
                                key={field.id}
                                name={field.name}
                                type={field.type}
                            >
                                {field.content}
                            </button>                        
                )} else{
                    return(
                        <input
                            key={field.id}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                     ) }
                })} 
            
                </form>
            </div> 
            <section className='wrapperImage'>
                <img src= {formData.image.src} alt="" />
            </section>
        
        </section>           
    )
}