import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import SearchInput from "../../components/searchinput/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoadUser } from "../../redux/loadUserSlice";
import FullHeight from "react-full-height";
import Beverages from "../../components/beverages/Beverages"

export default function Home() {

  const reduxState = useSelector((state) => state)
  const dispatch = useDispatch();
 
  const userStatus = useSelector((state) => state.loadedUser)
  console.log(reduxState)
  console.log(userStatus)

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    dispatch(fetchLoadUser(userToken))
  }, [])
 
  const userName = () => {
    if (userStatus.isAuthenticate === "true") {

      return <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Welcome, {userStatus.loadedUser.username.toUpperCase()}
      </h1>
    }
  }

  return (
    <Layout>
      <FullHeight>
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            { userName() }
          </div>
          <div className="max-w-7xl mx-auto mt-10 sm:px-6 lg:px-8" >
            <SearchInput />
            <Beverages />
            {/* <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}
          </div>
        </main>
      </FullHeight>
    </Layout>
  );
}
