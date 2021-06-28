import React, { useState } from 'react';
import axios from "axios";


export default function LoginUser() {



  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [data, setData] = useState(null);


  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/login",
    }).then((res) => {
      console.log(res)
      const successful = res.data

      if (successful) {
        localStorage.setItem("userInfo", JSON.stringify(successful))
      }
    });
  };


  console.log(loginUsername)


  // const getUser = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:5000/api/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  const userName = localStorage.getItem("userInfo")
  console.log(userName)



  const logOutUser = () => {
    localStorage.removeItem("userInfo")
  }

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
      


      {/* <div> */}
        {/* <h1>Get User</h1>
        <button onClick={getUser}>Submit</button> */}
        {/* if Data is true then pass the h1 element  */}
        {/* {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div> */}

      

      <div>
        <h1>Username: {userName} </h1>
        <button onClick={logOutUser}>Logout</button>
      </div>
    </div>
  )
}
