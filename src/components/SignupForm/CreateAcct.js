import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
function Signup() {
  const [email, setEmail] = useState("")
  const [name, setname] = useState("")
 

 const handleFormData = () =>  {
 localStorage.setItem("email", JSON.stringify( email))
 localStorage.setItem("name", JSON.stringify(name))
 }
//  console.log("sf", email, name)
 
  return (
    <div className="signup">
      <div className="container">
        <div className="form">
          <h1>Create your PopX account</h1>
          <form  onSubmit={handleFormData} >
            <div className="input-container" >
              <label htmlFor="name" className="label" >Full Name</label> <br/>
              <input type="tel" value={name} onChange={(e) => setname(e.target.value)} className="input" id="" name="number" required />
              <br/> <br/>
            </div>

            <div className="input-container" >
              <label htmlFor="number" className="label" >Phone Number</label> <br/>
              <input type="tel" className="input" id="" name="number" required />
              <br/> <br/>
            </div>

            <div className="input-container">
              <label  className="label" htmlFor="email">Email Address </label> <br/>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="input" id="" name="email" required /> <br/> <br/>
            </div>

            <div className="input-container">
              <label htmlFor="password" className="label">Password</label> <br/>
              <input   type="password" id="" className="input" name="password" required /> <br/> <br/>
            </div>

            <div className="input-container">
              <label htmlFor="company" className="label" >Company Name</label> <br/>
              <input  type="text" id="" className="input" name="company" required /> <br/> <br/>
            </div>

            <div className="radio">
              <label htmlFor="agency">Are you an Agency</label> 
              <br/>
              <input type="radio" id=""  name="agency" defaultChecked />
            Yes {"  "}
            <input type="radio" id=""  name="agency" />
            No
            </div>

          
          </form>
          <div></div>
        </div>
        <div>
          <Link to="/profile">
            <button type="submit" onClick={handleFormData} className="create">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
