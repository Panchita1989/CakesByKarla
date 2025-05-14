import {Link} from 'react-router-dom'

export default function Login() {
    return(
    <section className='loginForm'>
        <div className='wrapperForm'>
            <h2>Log In</h2>
            <div>or</div>
            <Link to='' className='login' >Signe Up</Link>
    
            <form action="get">
                <input type="email" placeholder='email' required/>
                <input type='password' required/>
                <button type='submit' >Log in</button>
            </form>
        </div>
        <div className='wrapperImage'>
            <img src={Brownie} alt="Brownie" />
        </div>
    </section>
    )
}