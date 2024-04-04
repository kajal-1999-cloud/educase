import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
function Login() {
  return (
  <div className='login'>
      <div className='container'>
        <h1>
            Signin to your PopX account
        </h1>
        <p>Lorem Ipsum is simply dummy text. <br/>typesetting printing and industry.</p>
       
       <form target='_blank'>
       <div className="input-container">
              <label  className="label" htmlFor="email">Email Address </label> <br/>
              <input type="email" className="input" id="" name="email" placeholder='Enter email address' required /> <br/> <br/>
            </div>

            <div className="input-container">
              <label htmlFor="password" className="label">Password</label> <br/>
              <input   type="text" id="" className="input" name="password" placeholder='Enter password' required /> <br/> <br/>
            </div>
      
       </form>
      <div> 
      <Link to="/profile"
       > 
       <button type='submit' className='loginBtn'>Login</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Login