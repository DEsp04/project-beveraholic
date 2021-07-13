


export async function loadedUser() {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


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
