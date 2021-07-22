import axios from "axios";





export async function getBeverages () {
  const results = await axios.get().then((res) => {
    console.log(res)
    return res.data;
  });
  
  return results;
};