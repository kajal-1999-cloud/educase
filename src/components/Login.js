import React from 'react'

function Login() {
  return (
    <div>
        <h1>
            Signin to your PopX account
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
       
       <form>
       <label htmlFor='email'>Email Address </label>
        <input type='email' id='' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='text' id='' name='password' required />
       </form>
    </div>
  )
}

export default Login