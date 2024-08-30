import React, {useState} from "react";
import './SignIn.css'

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Validate credentials
        if (email === storedEmail && password === storedPassword) {
            alert('Thank you - Visit Again');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    }

    return(
        <>
        <div className="signin-container">
        <form onSubmit={handleSubmit} className="signin-form">
        <h1 className="Login">LOGIN</h1>
        <h2><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="underline-text" required/></h2>
        <h2><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="underline-text" required/></h2>
        <p className="error">{error}</p>
        <button type="submit" className="signin-btn">Login</button>
        <p className="para">Don't have an account? <a href="http://localhost:3000/signup" className="link">Signup</a></p>
        </form>
        </div>
        </>
    )
}