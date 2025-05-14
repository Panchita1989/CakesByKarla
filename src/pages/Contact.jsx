import '../styles/contact.css'
import Brownie from '../assets/images/brownie.jpg'

export default function Contact() {
    return ( 
        <section className='contactForm'>
            <div className='wrapperForm'>
            <h2>Send me a Message</h2>
            <form action="get">
                <input type="text" placeholder='Name' required/>
                <input type="email" placeholder='email' required/>
                <textarea name="message" id="message" rows='10' required></textarea>
                <button type='submit' >send</button>
            </form>
            </div>
            <div className='wrapperImage'>
                <img src={Brownie} alt="Brownie" />
            </div>
        </section>
        
    )
        
        
        
        
    
        
}