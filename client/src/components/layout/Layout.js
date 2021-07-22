import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FullHeight from "react-full-height";

export default function Layout(props) {
  return (
    <div class="bg-soapstone-500">
      <Header />
git         {props.children}
      <Footer />
    </div>
  );
}
