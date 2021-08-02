import { NavLink } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function FavoritePost(props) {
  
  // console.log("***********FavoritePost", props._id)

  const deleteFavoriteItem =async ()=>{
    await axios({
      url: `https://beveraholicapp.herokuapp.com/api/favorites/${props._id}`,
      method: "DELETE",
    }).then((res) => {
      // console.log(res)
      return res.data
    }).catch((error) => {
      // handle error
      console.log(error);
    })

    props.refreshPage(prevCheck => !prevCheck)
  }



  const deleteButton = () => {
      return <div className="xbutton flex items-start justify-between pt-2 rounded-t">
        <button
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={deleteFavoriteItem}
        >
          <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-spring-wood-500">
            ×
          </span>
        </button>
      </div>
  }
  
  
  return (
    <div className="text-center rounded-md px-10 m-1 p-2 bg-shark-500 md:mx-10 mx-0 w-auto">
      
      {deleteButton()}

      <div>
        <img
           className="h-40 w-full rounded-md 100%"
          src={props.beverage_image}
          alt=""
        />
      </div>
      <h3 className="text-spring-wood-500 text-base font-semibold my-3 overflow-hidden whitespace-nowrap overflow-ellipsis w-20">{props.beverage_name}</h3>
      <h2 className="text-spring-wood-500">{props.alcohol_content}</h2>
      

      <div className="flex items-center justify-center p-6 pt-2 rounded-b">
              <NavLink
        to={{
          pathname: "/beverageInfo",
            state: props
              ? {
                name: props.beverage_name,
                image: props.beverage_image,
                category: props.beverage_category,
                content: props.alcohol_content,
                instruction: props.instruction,
                ingredient: props.ingredients,
                userId: props.user_id,
                beverageId: props._id,
              }
            : {},
        }}
      >
        <button
          type="button"
          className = " flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-x font-bold font-medium text-spring-wood-500 bg-vin-rouge-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500"
        >
          View
        </button>
        </NavLink>  
      </div>  
    </div>
  )
}
