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
    url: "https://beveraholicapp.herokuapp.com/api/login",
  }).then((res) => {
    console.log(res)
    return res.data
  })

  return results;
}
