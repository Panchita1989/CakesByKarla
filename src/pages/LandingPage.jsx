import React from 'react'
import Karla from '../assets/images/karla.jpg';
import './LandingPage.css'


export default function LandingPage(){
    return(
       <div className="wrapper">
            <h1 className="welcome">Welcome to Baked Goods by Karla</h1>
            <div className="landingPage">
                <div className='description'>
                    <h2>About Me Karla</h2>
                    <p> I grew up as the middle of three sisters and discovered my passion for baking at an early age. What started with simple cakes and cookies in our family kitchen gradually turned into something much bigger.
                        Today, I truly enjoy creating custom baked goods that reflect each customer’s individual taste. Whether it’s a classic chocolate cake, a fruity tart, or a batch of carefully decorated cookies – I always focus on fresh ingredients, quality, and thoughtful preparation.
                        What matters most to me is that my creations bring a moment of joy – whether it’s at a birthday party, a family gathering, or just as a treat in between.
                        My goal is to make something that feels personal, tastes great, and fits the occasion – handmade, honest, and with attention to detail.</p>
                    <h2>What we offer</h2>
                    <p> With us, you can order cakes that match your personal taste – either by choosing your own ingredients or picking from our ready-made suggestions. Whether you prefer something chocolatey, fruity, or unique: every cake is freshly baked and thoughtfully made.</p>
                    <button>Contact Me</button>
                </div>
                <div className='fotoKarla'>
                    <img src={Karla} alt="Karla" />
                </div>
            </div>
            <section className='choosYourOption'>                                 
                    <button className='buildYourOwnCake'>Build your own cake</button>                
                    <button className='ourFavoriteBakes'>Our favorite Bakes</button>                
            </section>
        </div>
    )
}