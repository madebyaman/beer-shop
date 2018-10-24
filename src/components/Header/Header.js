import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Logo from '../../logo.svg';

//Styles for Header
import "./Header.css";

const Header = (props) => {
  return (
  <div className="header">
    <div className="container">
    <ul className="menu">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
      </li>
      <li>
        <NavLink to="/favourites">Favourites {`${props.favouriteItems}`}</NavLink>
      </li>
    </ul>
      </div>
  </div>
  );
}

export default Header;