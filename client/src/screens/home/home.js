import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import SearchInput from "../../components/searchinput/SearchInput.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoadUser } from "../../redux/loadUserSlice";

import { fetchDrinks } from "../../redux/beveragesSlice";

import FullHeight from "react-full-height";
import Beverages from "../../components/beverages/Beverages";



export default function Home() {

  const reduxState = useSelector((state) => state)
  const dispatch = useDispatch();
 
  const userStatus = useSelector((state) => state.loadedUser)
  console.log(reduxState)
  console.log(userStatus)
  
  const status = useSelector((state) => state.getBeverages.status);

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    dispatch(fetchLoadUser(userToken));
    dispatch(fetchDrinks());
  }, [])
 
  const userName = () => {
    if (userStatus.isAuthenticate === "true") {

      return <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Welcome, {userStatus.loadedUser.username.toUpperCase()}
      </h1>
    }
  }

  function showBeverages(){
    if (status === "loading" || status === "failed") {
      return <div className="h-screen"></div>
    } else if (status === "success") {
      return <Beverages />
    }
  }

  return (
    <Layout>
        <main className="py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            { userName() }
          </div>
          <div className="max-w-7xl mx-auto mt-10 sm:px-6 lg:px-8" >
            <SearchInput /> 
          </div>
        { showBeverages() }
        </main>
    </Layout>
  );
}
