import React, { useState } from 'react';
import axios from "axios";


export default function LoginUser() {



  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/login",
    }).then((res) => console.log(res));
  };



  return (
    <div>
       <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
    </div>
  )
}
