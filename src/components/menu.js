import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="nav nav-pills nav-justified">
      <li role="presentation">
        <NavLink to="/biography">BIOGRAPHY</NavLink>
      </li>
      <li role="presentation"><NavLink to="/music">MUSIC</NavLink></li>
      <li role="presentation"><NavLink to="/videos">VIDEOS</NavLink></li>
      <li role="presentation"><NavLink to="/shows">SHOWS</NavLink></li>
    </ul>
  );
}

export default Menu;
