import React from "react";

export default function EditRecipe() {

  const update = () => {
    console.log("hello")
  }





  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-right text-3xl font-bold leading-tight  mt-6 mr-10">
      <span className="cursor-pointer hover:text-gray-500 text-vin-rouge-500 hover:underline"
      onClick={update}
      >
          Edit
        </span>
      </p>
  </div>
  );
}
