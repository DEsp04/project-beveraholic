import React from 'react'
import Layout from "../../components/layout/Layout"
import FullHeight from "react-full-height";



export default function beverageInfo(props) {

  console.log(props)

  return (
    <Layout>
      {/* <FullHeight> */}
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Beverage Information
            </h1>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-8 sm:px-0">
              <h2>{props.location.state.name}</h2>

              <div>
                <img
                  src={props.location.state.image}
                  alt=""
                />
              </div>
            </div>
            <div>
              <p>Name: {props.location.state.name}</p>
              <p>Category: {props.location.state.category}</p>
              <p>Alchohol Content: {props.location.state.content}</p>
              <p>Ingredient: {props.location.state.ingredient}</p>
            </div>
            {/* /End replace */}
          </div>
        </main>
      {/* </FullHeight>  */}
    </Layout> 
  )
}
