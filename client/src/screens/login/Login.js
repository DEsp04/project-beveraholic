import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/nav";
import LoginUser from "../../components/loginUser/LoginUser"

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Nav />
      <LoginUser />
      <Footer />
    </div>
  );
}
