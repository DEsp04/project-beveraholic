import React from 'react'




export default function BeveragePost(props) {
  console.log(props)
  
  return (
    <div className="text-center rounded-md px-10 m-1 p-2 bg-shark-500 md:mx-10 mx-0">
      <div>
        <img
           className="h-40 w-full rounded-none 100%"
          src={props.beverage_image}
          alt=""
        />
      </div>
      <h3>{props.beverage_name}</h3>
      <h2>{props.alcohol_content}</h2>
      

      <div className="flex items-center justify-center p-6 pt-2 rounded-b">
              {/* <NavLink
        to={{
          pathname: "/jobDescription",
          state: props
            ? {
                logo: props.company_logo_url,
                title: props.title,
                company: props.company_name,
                category: props.category,
                salary: props.salary,
                requirement: props.candidate_required_location,
                hours: props.job_type,
                description: props.description,
                apply: props.url,
              }
            : {},
        }}
      > */}
        <button
          type="button"
          className = " flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-x font-bold font-medium text-spring-wood-500 bg-vin-rouge-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500"
        >
          View
        </button>
        {/* </NavLink>   */}
      </div>  
    </div>
  )
}
