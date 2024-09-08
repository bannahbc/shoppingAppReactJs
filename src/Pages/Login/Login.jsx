import React from 'react'
import './Login.css'
const Login =()=>{
    return <div className="login">
        <div className="login-wrapper">
            <div className="login-content">
                <form action="" className="login-form">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Sign UP</button>
                </form>
            </div>
        </div>
    </div>
}
export default Login