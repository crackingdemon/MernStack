import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/HNBG.ico';


const Navbar = () => {
    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="img" />
          HNB UNIVERSITY</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/signin">Sign in </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/signup">Sign up </NavLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
