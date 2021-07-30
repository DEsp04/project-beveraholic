import React,{useState,useEffect} from "react";
import Layout from "../../components/layout/Layout";
import FullHeight from "react-full-height";
import axios from "axios";
import { useSelector } from "react-redux";





export default function Favorites() {
  const userId = useSelector((state) => state.loadedUser.loadedUser._id);
  console.log("THIS IS COMING FROM FAVORITES", userId)



const getFavorite = async()=>{
    const response =await axios.get(`https://beveraholicapp.herokuapp.com/api/favorites/${userId}`)
    console.log(response)
}
  


  
useEffect(()=>{
  getFavorite()
  
},[])
  return (
    <Layout>
      {/* <FullHeight> */}
        <main className="py-10  min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Favorite Recipes
              
            </h1>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      {/* </FullHeight>  */}
    </Layout>
  );
}
