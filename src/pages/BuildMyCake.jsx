import React from "react";
import '../styles/BuildMyCake.css'
import cheescake from '../assets/images/cheescake.jpg'

export default function BuildMyCake(){

    return(
        <section className= 'wrapper'>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Choose your favorite ingredients and we will make your favorite Cake</h3>
            <section className ='buildYourOwnWrapper'>
            <section className='electionForm'>
                <form >
                    <label className='labelOptions' htmlFor="dough">Choose your favorite Dough:</label>
                    <select name="dough" id="dough" required>
                        <option value="" disabled selected hidden>Dough</option>
                        <option value="vainilla">Vainilla</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="creamcheese">Creamcheese</option>
                        <option value="keto">Keto</option>
                    </select>
                    <label className='labelOptions' htmlFor="filling">Choose your favorite filling:</label>
                    <select name="filling" id="filling" required>
                        <option value="" disabled selected hidden>Filling</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="vainilla">Vainilla</option>
                        <option value="berries">Berries</option>
                    </select>
                    <label className='labelOptions' htmlFor="topping">Choose your favorite topping:</label>
                    <select name="topping" id="topping" required>
                        <option value="" disabled selected hidden>Topping</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="berries">Berries</option>
                        <option value="guava">Guava</option>
                        <option value="nuts">Nuts scrumble</option>
                    </select>
                    <label className='labelOptions' htmlFor="size">Choose the size: </label>
                    <select name="size" id="size" required>
                        <option value="" disabled selected hidden>Size (amount of people)</option>
                        <option value="mini">Mini (8)</option>
                        <option value="medium">Medium (15)</option>
                        <option value="large">Large (25)</option>
                    </select>
                    <button>Get my Cake</button>
                </form>
            </section>
            <section className='foto'>
                <img src={cheescake} alt="cheescake" />
            </section>
            </section>
        </section>
    )
}