import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import SearchInput from "../../components/searchinput/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoadUser } from "../../redux/loadUserSlice";

export default function Home() {

  const reduxState = useSelector((state) => state)
  const dispatch = useDispatch();
 
  const userName = useSelector((state) => state.loadedUser.loadedUser)
  console.log(reduxState)
  console.log(userName)

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    dispatch(fetchLoadUser(userToken))
  }, [])
 


  return (
    <Layout>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Home
          </h1>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <SearchInput />
          {/* <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div> */}
        </div>
      </main>
    </Layout>
  );
}
