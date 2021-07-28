import axios from "axios";



export async function updateDrink( { beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction, beverageId } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  const results = axios({
    config,
    method: "PUT",
    data: {
      beverage_name: beverageName,
      beverage_image: imageUrl,
      beverage_category: category,
      alcohol_content: alcoholContent,
      ingredients: beverageIngredient,
      instruction: instruction 
    },
    url: `https://beveraholicapp.herokuapp.com/api/beverages/${beverageId}`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })

  return results;
}
