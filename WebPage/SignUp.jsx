import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conform, setConform] = useState('')
    const [error, setError] = useState({})

    const navigate = useNavigate()

    const validateForm =() =>{
        
        let error = {}
        let isValid = true

        if (password.length < 8) {
            error.password = "Password must be at least 8 characters";
            isValid = false
        }

        // Check if password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            error.password = "Password must contain at least one uppercase letter";
            isValid = false
        }

        // Check if password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            error.password = "Password must contain at least one lowercase letter";
            isValid = false
        }

        // Check if password contains at least one number
        if (!/[0-9]/.test(password)) {
            error.password = "Password must contain at least one number";
            isValid = false
        }

        // Check if password contains at least one special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            error.password = "Password must contain at least one special character";
            isValid = false
        }

        if(password !== conform){
            error.conform = "Password do not match"
            isValid = false
        }

        setError(error)
        return isValid
    }
    

    function handleSubmit(event){
        event.preventDefault()
        if(validateForm()){
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert(`Your Account has been Created ${name}`)
        navigate('/SignIn')
        }
    }   

    return(
        <>
        <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="account">CREATE ACCOUNT</h1>
        <h2><input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="underline-text" required/></h2>
        <h2><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="underline-text" required /></h2>
        <h2><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="underline-text" required/></h2>
        <p className="error">{error.password}</p>
        <h2><input type="password" placeholder="Conform Password" value={conform} onChange={(e)=>setConform(e.target.value)} className="underline-text" required/>
        </h2><p className="error">{error.conform}</p>
        <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        </div>
        </>
    )
}