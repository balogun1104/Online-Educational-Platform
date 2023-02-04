import React from 'react'
import {GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
    const handleGoogleSignIn = async () => {
        const {googleSignIn} = UserAuth()
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
        <h2>Sign In</h2>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  )
}

export default SignIn