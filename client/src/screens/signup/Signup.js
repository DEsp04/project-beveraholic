import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Nav";
import Registration from "../../components/registerUser/RegisterUser";

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <Nav />
      <Registration />
      <Footer />
    </div>
  );
}
