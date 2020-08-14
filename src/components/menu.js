import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="nav nav-pills nav-justified">
      <li role="presentation" className="nav-item">
        <NavLink className="nav-link" to="/music">MUSIC</NavLink>
      </li>
      <li role="presentation" className="nav-item">
        <NavLink className="nav-link" to="/videos">VIDEOS</NavLink>
      </li>
      <li role="presentation" className="nav-item">
        <NavLink className="nav-link" to="/biography">BIO</NavLink>
      </li>
      <li role="presentation" className="nav-item">
        <NavLink className="nav-link" to="/blog">BLOG</NavLink>
      </li>
      <li role="presentation" className="nav-item">
        <NavLink className="nav-link" to="/shop">SHOP</NavLink>
      </li>
      
    </ul>
  );
}

export default Menu;
