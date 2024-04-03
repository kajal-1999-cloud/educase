import React from 'react'

function Signup() {
  return (
    <div>
        <form>
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
        
        </form>
    </div>
  )
}

export default Signup