import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBeverages } from "../../services/fetchBeverages";
import BeveragePost from "../beveragePost/BeveragePost";






export default function Beverages() {

  const beverageList = useSelector((state) => state.getBeverages.beverages)
  const status = useSelector((state) => state.getBeverages.status);
  console.log(beverageList)

  const renderList = () => {
    if (status === "success") {
      return beverageList.map((beverageInfo, index) => {
        return <BeveragePost {...beverageInfo} key={index} />
      })
    }
  }

  
  return (
    <div>
      <h2>Beverages</h2>
      {/* render beverage list below */}
      <div className="flex justify-start items-center flex-wrap mb-16">
        {renderList()}
      </div>
    </div>
  )
}
