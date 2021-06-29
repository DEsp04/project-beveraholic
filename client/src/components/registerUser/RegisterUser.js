import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  //hooks to capture user inputs
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/register",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <input
        placeholder="Username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="Email Address"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />

      <button onClick={register}>Sign Up</button>
    </div>
  );
}
