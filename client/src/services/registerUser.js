import axios from "axios";




export async function userRegister({ registerUsername, registerEmail, registerPassword }) {
  

  const result = axios({
    method: "POST",
    data: {
      "username": registerUsername,
      "email": registerEmail,
      "password": registerPassword,
    },
    // withCredentials: true,
    url: "https://beveraholicapp.herokuapp.com/api/register",
  }).then((res) => {
    console.log(res)
    return res.data
  });


  return result;
}







