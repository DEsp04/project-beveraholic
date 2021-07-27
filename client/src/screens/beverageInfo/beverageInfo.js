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
              <h2  className="text-center text-iv font-bold">{props.location.state.name}</h2>

              <div className="text-center rounded-md px-4 m-1 p-2 border border-vin-rouge-500 w-26 h-50 mx-auto">
                <img
                  src={props.location.state.image}
                alt=""
                className="h-full w-full rounded-md 100%"
                />
              </div>
            </div>
            <div>
              <p className="my-4"><span className="bg-vin-rouge-500 text-spring-wood-500 rounded-sm px-2 py-1">Name:</span> {props.location.state.name}</p>
              <p className="my-4"><span className="bg-vin-rouge-500 text-spring-wood-500 rounded-sm px-2 py-1">Category:</span> {props.location.state.category}</p>
              <p className="my-4"><span className="bg-vin-rouge-500 text-spring-wood-500 rounded-sm px-2 py-1">Alchohol Content:</span> {props.location.state.content}</p>
              <p className="my-4"><span className="bg-vin-rouge-500 text-spring-wood-500 rounded-sm px-2 py-1">Ingredient:</span> {props.location.state.ingredient}</p>
            </div>
            {/* /End replace */}
          </div>
        </main>
      {/* </FullHeight>  */}
    </Layout> 
  )
}
