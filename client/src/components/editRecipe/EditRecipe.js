import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBeverage } from "../../redux/editBeverageSlice";



export default function EditRecipe({ state, update, setItem, item }) {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedDrink = Object.assign(item, updatedField);
    console.log(editedDrink)
    setItem(editedDrink);
  };



  useEffect(() => {

  }, [])



  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-right text-3xl font-bold leading-tight  mt-6 mr-10">
          <span className="cursor-pointer hover:text-gray-500 text-vin-rouge-500 hover:underline"
          onClick={() => setShowModal(true)}
          >
              Edit
          </span>
      </p>
    </div>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-md bg-shark-500 rounded-md w-full xxs:mx-2 xs:mx-2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-4 mr-3  rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-spring-wood-500">
                      ×
                    </span>
                  </button>
                </div>
                
                <form className="space-y-6" action="#" method="POST">
                  <h3 className="text-xxxl font-extrabold text-spring-wood-500 text-center">
                    Edit Recipe
                  </h3>
                
                {/*body*/}
                <div className="relative px-6 pb-2 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        placeholder="Name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange}
                      />
                    </div>  
                  </div>
                    
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="category" id="category"
                          onChange={handleChange}
                          id="category"
                          name="category"
                          type="category"
                          defaultValue=""
                        >
                        <option value="" disabled>--Category--</option>
                        <option value="juice drink">Juice Drink</option>
                        <option value="spirits">Spirits</option>
                        <option value="fronzen drink">Frozen Drink</option>
                        <option value="cocktail">Cocktail</option>
                        <option value="hard soda">Hard Soda</option>
                        <option value="mixed drink">Mixed Drink</option>
                      </select>
                    </div>  
                  </div>

                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">                
                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="alcohol" id="alcohol"
                          onChange={handleChange}
                          id="content"
                          name="content"
                          type="content"
                          defaultValue=""
                        >
                        <option value="" disabled>--Alcholic Content--</option>
                        <option value="Alcoholic">Alcoholic</option>
                        <option value="Non-alcoholic">Non-Alcoholic</option>
                      </select>
                    </div>  
                  </div>

                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">
                      <input
                          id="img"
                          placeholder="Image URL"
                          name="image"
                          type="img"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={handleChange}
                      />
                    </div>  
                  </div>            

                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">
                      <input
                          id="ingredient"
                          name="ingredient"
                          type="ingredient"
                          placeholder="Ingredient"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={handleChange}
                      />
                    </div>  
                  </div>

                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">  
                    <div className="mt-1">
                        <textarea id="instruction" name="instruction" placeholder="Instruction" rows="3" cols="40" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={handleChange}
                        ></textarea>
                    </div>
                  </div>


                </div>
                  
                {/*footer*/}
                  <div className="flex items-center justify-center p-6 pt-2 rounded-b">
                    <button
                      className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold font-medium text-spring-wood-500 bg-vin-rouge-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500"
                      type="submit"
                      onClick={
                        () => {
                          setShowModal(false)
                          update()
                        }
                      }
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} 

    </>
  );
}
