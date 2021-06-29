//rfc creates boilerplate
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div class="py-10">
      <nav class="flex justify-end bg-yellow-100 fixed left-0 right-0">
        <ul class="flex space-x-10">
          <li class="flex-1 mr-2">
            <NavLink
              class="text-center block border rounded py-2 px-4 bg-blue-500 hover:text-white"
              exact
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li class="flex-1 mr-2">
            <NavLink
              class="text-center block border  rounded py-2 px-4 bg-blue-500 hover:text-white"
              exact
              to={"/favorites"}
            >
              Favorite Recipes
            </NavLink>
          </li>
          <li class="flex-1 mr-2">
            <NavLink
              class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:text-white"
              exact
              to={"/about-us"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
