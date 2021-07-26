import axios from "axios";

export async function addNewBeverage( { loginEmail, loginPassword } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  const results = axios({
    config,
    method: "POST",
    data: {
      beverage_name: loginEmail,
      beverage_image: loginPassword,
      beverage_category: "",
      alcohol_content: "",
      ingredients: "",
      instruction: "" 
    },
    url: "https://beveraholicapp.herokuapp.com/api/beverages",
  }).then((res) => {
    console.log(res)
    return res.data
  })

  return results;
}

