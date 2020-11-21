import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/Logo.png";
import { logout } from "../../../redux/actions/LoginActions";
import { userContext } from "../../Routes/Routes";
import './Header.scss';

const Header = () => {
  const user = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <div className="header-section container">
     

      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
        <div className="logo">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              
            <li className="nav-item active mr-2">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
           

            <li className="nav-item  mr-2">
              <a className="nav-link" href="#about">
                About 
              </a>
            </li>
           

            <li className="nav-item  mr-2">
              <a className="nav-link" href="#service">
                Service 
              </a>
            </li>

            <li className="nav-item  mr-2">
              <a className="nav-link" href="#about">
                Contact 
              </a>
            </li>

            <li className="nav-item  mr-2">
              <Link className="nav-link btn btn-login" to="/login">
                Login 
              </Link>
            </li>

            <li className="nav-item  mr-2">
              <Link className="nav-link btn btn-login" to="/deshboard">
                DeshBoard
              </Link>
            </li>

            {
              user.isLoggedIn && 
              <li className="nav-item ">
                <button className="nav-link btn btn-login" onClick={() => dispatch(logout())}>
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
