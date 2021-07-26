import React from 'react'




export default function BeveragePost(props) {
  console.log(props)
  
  return (
    <div>
      <div>
        <img
          src={props.beverage_image}
          alt=""
        />
      </div>
      <h3>{props.beverage_name}</h3>
      <h2>{props.alcohol_content}</h2>
      
    </div>
  )
}
