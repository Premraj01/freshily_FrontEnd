/** @format */

import React from 'react'
import { Card } from 'react-bootstrap'

const TForm = () => {
  return (
    <Card>
      <div>
        <meta charSet='UTF-8' />
        <title>Login/Registration Form Transition</title>
        <link
          rel='stylesheet prefetch'
          href='https://fonts.googleapis.com/css?family=Open+Sans'
        />

        <p className='tip'>Click on button in image container</p>
        <div className='cont'>
          <div className='form sign-in'>
            <h2>Welcome back,</h2>
            <label>
              <span>Email</span>
              <input type='email' />
            </label>
            <label>
              <span>Password</span>
              <input type='password' />
            </label>
            <p className='forgot-pass'>Forgot password?</p>
            <button type='button' className='submit'>
              Sign In
            </button>
            <button type='button' className='fb-btn'>
              Connect with <span>facebook</span>
            </button>
          </div>
        </div>
        <script src='./form.js'></script>
      </div>
    </Card>
  )
}

export default TForm
