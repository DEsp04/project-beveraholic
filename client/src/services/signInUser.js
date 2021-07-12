import React from 'react';
import axios from "axios";





export async function logInUser( { loginEmail, loginPassword } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const body = JSON.stringify({ loginEmail, loginPassword });

  const results = axios({
    config,
    method: "POST",
    data: {
      email: loginEmail,
      password: loginPassword
    },
    url: "http://localhost:5000/api/login",
  }).then((res) => {
    console.log(res.data)
    return res.data
  })

  return results;
}
