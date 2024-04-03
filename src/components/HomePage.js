import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <h1>
        Welcome to PopX
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to="/profile"
       > <button>Create Account</button></Link>
   <Link to="/profile"
       > <button>Already Registered? Login</button></Link>
    </div>
  )
}

export default HomePage