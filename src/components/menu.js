import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="wole-menu nav nav-tabs nav-justified">
      <li role="presentation">
        <NavLink to="/biography">BIOGRAPHY</NavLink>
      </li>
      <li role="presentation">
        <NavLink to="/music">MUSIC</NavLink>
      </li>
      <li role="presentation">
        <NavLink to="/videos">VIDEOS</NavLink>
      </li>
      <li role="presentation">
        <NavLink to="/blog">BLOG</NavLink>
      </li>
      <li role="presentation">
        <NavLink to="/shop">SHOP</NavLink>
      </li>
      
    </ul>
  );
}

export default Menu;
