import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBeverages } from "../../services/fetchBeverages";
import BeveragePost from "../beveragePost/BeveragePost";
import { SearchIcon } from "@heroicons/react/solid";






export default function Beverages() {

  const beverageList = useSelector((state) => state.getBeverages.beverages)
  const status = useSelector((state) => state.getBeverages.status);
  console.log(beverageList)
  const searchTerm = useSelector((state) => state.searchTerm.count)














  const renderList = () => {
    if (status === "success") {
      return beverageList.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.beverage_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((beverageInfo, index) => {
        return <BeveragePost {...beverageInfo} key={index} />
      })
    }
  }

  
  return (
    <div>
      
      {/* render beverage list below */}
      <div className="flex justify-start items-center flex-wrap mb-16">
        {renderList()}
      </div>
    </div>
  )
}
