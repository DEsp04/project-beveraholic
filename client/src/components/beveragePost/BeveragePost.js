import React from 'react'
import { NavLink } from "react-router-dom";
import "./beveragePost.css"




export default function BeveragePost(props) {
  console.log(props)
  
  return (
    <div className="text-center rounded-md px-10 m-1 p-2 bg-shark-500 md:mx-10 mx-0 w-auto">

<div className="xbutton flex items-start justify-between pt-2 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                  >
                    <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-spring-wood-500">
                      ×
                    </span>
                  </button>
                </div>
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
