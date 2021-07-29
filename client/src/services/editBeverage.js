import axios from "axios";



export async function updateDrink( { item } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  const results = axios({
    config,
    method: "PUT",
    data: {
      beverage_name: item.name,
      beverage_image: item.image,
      beverage_category: item.category,
      alcohol_content: item.content,
      ingredients: item.ingredient,
      instruction: item.instruction 
    },
    url: `https://beveraholicapp.herokuapp.com/api/beverages/${item.beverageId}`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })

  return results;
}
