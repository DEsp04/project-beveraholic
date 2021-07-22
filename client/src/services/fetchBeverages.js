import axios from "axios";





export async function getBeverages () {
  const results = await axios.get("https://beveraholicapp.herokuapp.com/api/beverages").then((res) => {
    console.log(res)
    return res.data;
  });
  
  return results;
};