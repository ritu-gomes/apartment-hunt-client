import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/Logo.png";
import { userContext } from "../../Routes/Routes";
import './Header.scss';

const Header = () => {
  const [user,setUser] = useContext(userContext);
  return (
    <div className="header-section container">
     

      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/">
        <div className="logo">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        </Link>
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
              <Link class="nav-link" to="/">
                Home 
              </Link>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#about">
                About 
              </a>
            </li>
           

            <li class="nav-item ">
              <a class="nav-link" href="#service">
                Service 
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="#about">
                Contact 
              </a>
            </li>

            <li class="nav-item ">
              <Link class="nav-link btn btn-login" to="/login">
                Login 
              </Link>
            </li>

            {
              user.isLoggedIn && 
              <li class="nav-item ">
                <button class="nav-link btn btn-login" onClick={() => setUser({})}>
                  Log Out 
                </button>
              </li>
            }
           
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
