import axios from "axios";


export async function loadedUser() {
  
  const results = await axios.get("https://beveraholicapp.herokuapp.com/api/user").then((res) => {
    console.log(res)
    return res.data
  });

  return results;
}
