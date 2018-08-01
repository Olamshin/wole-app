import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="Wole-menu">
      <li>
        <NavLink to="/biography">BIOGRAPHY</NavLink>
      </li>
      <li><NavLink to="/music">MUSIC</NavLink></li>
      <li><NavLink to="/videos">VIDEOS</NavLink></li>
      <li><NavLink to="/shows">SHOWS</NavLink></li>
    </ul>
  );
}

export default Menu;
