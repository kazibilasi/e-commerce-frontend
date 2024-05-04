/* eslint-disable no-unused-vars */
import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>Sign Up</h1>
        <div className='loginSignup-fields'>
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>Already Have an account? <span>Login here</span></p>
        <div className='loginSignup-agree'>
          <input type='checkbox' name='' id=''></input>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
