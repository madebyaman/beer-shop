import React from 'react';
import {NavLink} from 'react-router-dom';

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
        <NavLink to="/favourites">Favourites</NavLink>
      </li>
    </ul>
    <h1>Your One Stop Destination for Beer</h1>
      </div>
  </div>
  );
}

export default Header;