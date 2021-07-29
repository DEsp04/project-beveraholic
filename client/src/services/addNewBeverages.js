import axios from "axios";

export async function addNewBeverage( { beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction } ) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  const results = axios({
    config,
    method: "POST",
    data: {
      beverage_name: beverageName,
      beverage_image: imageUrl,
      beverage_category: category,
      alcohol_content: alcoholContent,
      ingredients: beverageIngredient,
      instruction: instruction 
    },
    url: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlOWQ2YWNhNjJmNDcwY2MzOGRmMTE0In0sImlhdCI6MTYyNzUwMTk3NiwiZXhwIjoxNjI3ODYxOTc2fQ.YG3tDe3puDjSxBnwdvhxB1bdqhkSxeQreydbecu0dpA",
  }).then((res) => {
    // console.log(res)
    return res.data
  })

  return results;
}

