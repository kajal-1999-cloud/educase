import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form action='' target='_blank'>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='' name='name' required />

        <label htmlFor='number'>Phone Number</label>
        <input type='tel' id='' name='number' required />

        <label htmlFor='email'>Email Address </label>
        <input type='email' id='' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='text' id='' name='password' required />

        <label htmlFor='company'>Company Name</label>
        <input type='text' id='' name='company' required />

        <label htmlFor='agency'>Are you an Agency</label>
        <input type='radio' id='' name='agency' checked /> Yes
        <input type='radio' id='' name='agency'  /> No

        <Link to="/profile"
       > 
        <button type='submit'></button></Link>
        </form>
    </div>
  )
}

export default Signup