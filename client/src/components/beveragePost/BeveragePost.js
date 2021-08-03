import React from 'react'
import { NavLink } from "react-router-dom";
import "./beveragePost.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteBeverage } from "../../redux/deleteBeverageSlice"


export default function BeveragePost(props) {
  // console.log(props._id)
  console.log("Here FROM BEVERAGE POST", props)
  const userId = useSelector((state) => state?.loadedUser?.loadedUser?._id);


  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    e.preventDefault();
    // console.log(id)

    if (id.length > 0) {
      dispatch(deleteBeverage({ id }))
    }
  }

  const deleteButton = () => {
    if (props.user._id === userId) {
      return <div className="xbutton flex items-start justify-between pt-2 rounded-t">
        <button
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={
            (e) => {
              setId(props._id)
              deleteItem(e)
            }
          }
        >
          <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-spring-wood-500">
            ×
          </span>
        </button>
      </div>
    } else if(props.user._id !== userId) {
      return <div className="xbutton flex items-start justify-between pt-2 rounded-t">
        <div
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        >
          <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-spring-wood-500">
            🚫
          </span>
        </div>
      </div>
    }
  }

  
  return (
    <div className="text-center xxs:w-64 xs:w-64 sm:w-64  md:w-auto rounded-md px-10 m-1 p-2 bg-shark-500 md:mx-10 mx-0 w-auto">
      
      {deleteButton()}

      <div class="md:w-160px">
        <img
           className="h-40 xxs:w-full xs:w-full sm:w-full md:w-full rounded-md"
          src={props.beverage_image}
          alt=""
        />
      </div>
      <h3 className="text-spring-wood-500 text-base font-semibold my-3 overflow-hidden whitespace-nowrap overflow-ellipsis w-20">{props.beverage_name}</h3>
      <h2 className="text-spring-wood-500">{props.alcohol_content}</h2>
      

      <div className="flex items-center justify-center p-6 pt-2 rounded-b">
              <NavLink
        to={{
          pathname: "/beverage-detail",
            state: props
              ? {
                name: props.beverage_name,
                image: props.beverage_image,
                category: props.beverage_category,
                content: props.alcohol_content,
                instruction: props.instruction,
                ingredient: props.ingredients,
                userId: props.user._id,
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
