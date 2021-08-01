import React,{useState,useEffect} from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useSelector } from "react-redux";
import FavoritePost from "./favoritePost/FavoritePost"


export default function Favorites() {
  const [favoriteList, setFavoriteList] = useState([])
  const [refreshPage, setFreshPage] = useState(false)

  const userId = useSelector((state) => state.loadedUser.loadedUser._id);
  console.log("THIS IS COMING FROM FAVORITES", userId)

  console.log(refreshPage)

  const getFavorite = async () => {
    // const response = await axios.get(`https://beveraholicapp.herokuapp.com/api/favorites`)
    const response = await axios.get(`http://localhost:5000/api/favorites`)
    console.log(response)
    setFavoriteList(response.data)
  }

  

  console.log("Favorite List", favoriteList)
  
  const renderFavoriteList = () => {
    return favoriteList.filter(
      (value,index,array)=>{
        return array.findIndex(
            object=> {
                return object.beverage_id===value.beverage_id
                }
            )===index
        }
    ).map((favoriteItem, index) => {
      return <FavoritePost {...favoriteItem} key={index} refreshPage={setFreshPage} />
    })

  }

  
useEffect(()=>{
  getFavorite()
}, [refreshPage])
  
  
  return (
    <Layout>
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
          <div className="flex justify-start items-center flex-wrap mb-16">
          { renderFavoriteList()}
          {/* /End replace */}
          </div>
          </div>
        </main>
    </Layout>
  );
}
