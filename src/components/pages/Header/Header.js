import React from "react";
import logo from "../../../images/logos/Logo.png";
import './Header.scss';

const Header = () => {
  return (
    <div className="header-section container">
     

      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
        <div className="logo">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
              
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#">
                About 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#">
                Service 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#">
                Concern 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#">
                Event 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#">
                Contact 
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link btn btn-login" href="#">
                Login 
              </a>
            </li>
           
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
