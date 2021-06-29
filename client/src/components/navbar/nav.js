//rfc creates boilerplate
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to={"/home"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to={"/favorites"}>
            Favorite Recipes
          </NavLink>
        </li>
        <li>
          <NavLink exact to={"/about-us"}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
