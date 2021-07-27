import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBeverages } from "../../services/fetchBeverages";
import BeveragePost from "../beveragePost/BeveragePost";
import { SearchIcon } from "@heroicons/react/solid";
import NewRecipe from "../addNewRecipe/NewRecipe"






export default function Beverages() {

  const beverageList = useSelector((state) => state.getBeverages.beverages)
  const status = useSelector((state) => state.getBeverages.status);
  console.log(beverageList)

  const [searchTerm, setSearchTerm] = useState("");












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

      {/* <div className="md:mx-10 mx-0 w-1/3 lg:w-1/4 relative flex items-stretch flex-grow focus-within:z-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
          <input
              type="text"
              name="searchInput"
              id="searchInput"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-full pl-10 sm:text-sm border-gray-300"
              placeholder="Search"
          onChange={e => { setSearchTerm(e.target.value) }}
          />
      </div> */}
      

      {/* render beverage list below */}
      <div className="flex justify-start items-center flex-wrap mb-16">
        {renderList()}
      </div>
    </div>
  )
}
