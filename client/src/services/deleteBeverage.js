import axios from "axios";

export async function deleteDrink( { id } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


  const results = axios({
    config,
    method: "DELETE",
    url: `https://beveraholicapp.herokuapp.com/api/beverages/${id}`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })

  return results;
}
