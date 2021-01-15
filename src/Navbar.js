import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <a className="my_logo" href="#">
            My Logo
          </a>
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link
            to={{
              pathname: "/about",
             state:{
               name: "hassan"
             }
            }}
          >
            <li>
              <a href="#">About</a>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <a href="#">Services</a>
            </li>
          </Link>
          <Link to="/myprofile/zaid">
            <li>
              <a href="#">My Profile</a>
            </li>
          </Link>
        </ul>
        <button className="btn">Get Services</button>
      </nav>
    </div>
  );
}

export default Navbar;
