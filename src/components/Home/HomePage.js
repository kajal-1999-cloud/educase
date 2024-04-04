import React from "react";
import "../../components/Home/Home.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">
      <div className="container">
        <h1>Welcome to PopX</h1>
        <p> Lorem Ipsum simply dummy text.
          <br /> printing and typesetting industry.
        </p>

        <Link to="/signup">
          <button className="create">Create Account</button>
          <br></br>
        </Link>
        <Link to="/login">
          <button className="login">Already Registered? Login</button>
        </Link>
      </div>
      {/* <div>
        <p> hello</p>
      </div> */}
    </div>
  );
}

export default HomePage;
