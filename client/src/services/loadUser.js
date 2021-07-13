import axios from "axios";


export async function loadedUser() {
  
  const results = await axios.get("https://beveraholicapp.herokuapp.com/api/user").then(({ data }) => {
    return data
  });

  console.log(data)

  return results;
}
