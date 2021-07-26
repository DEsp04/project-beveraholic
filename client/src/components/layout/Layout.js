import React from "react";
import Header from "../header/Header";
import FullHeight from "react-full-height";

export default function Layout(props) {
  return (
    <div className="bg-soapstone-500">
      <Header />
        {props.children}
    </div>
  );
}
