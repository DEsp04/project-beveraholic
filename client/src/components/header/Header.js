import React from "react";
import Nav from "../navbar/Nav";
import UserMenu from "../userMenu/UserMenu";

export default function Header() {
  return (
    <div>
      <p>Logo</p>
      <Nav />
      <UserMenu />
    </div>
  );
}
