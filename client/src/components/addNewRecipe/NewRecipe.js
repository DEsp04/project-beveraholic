import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [beverageName, setBeverageName] = useState("");
  const [category, setCategory] = useState("");
  const [alcoholContent, setAlcoholContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  console.log(category)

  return (
    <>
      <button
        className="md:mx-10 mx-0 bg-transparent border border-gray-300 rounded-md font-bold py-2 px-4 text-vin-rouge-500 sm:text-sm text-yellow  hover:bg-vin-rouge-500 hover:text-white-500 hover:border-vin-rouge-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Beverage
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-md bg-shark-500 rounded-md w-full">
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
                    Add New Recipe
                  </h3>
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-spring-wood-500"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setBeverageName(e.target.value)}
                      />
                    </div>  
                  </div>
                    
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-spring-wood-500"
                    >
                      Category:
                    </label>
                    <div className="mt-1">  
                        <select className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="category" id="category"
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value selected>Select</option>
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
                    <label
                      htmlFor="alcohol"
                      className="block text-sm font-medium text-spring-wood-500"
                    >
                      Alcohol Content:
                    </label>
                    <div className="mt-1">  
                        <select className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="alcohol" id="alcohol"
                        onChange={(e) => setAlcoholContent(e.target.value)}
                        >
                        <option value selected>Select</option>
                        <option value="alcoholic">Alcoholic</option>
                        <option value="non-alcoholic">Non-Alcoholic</option>
                      </select>
                    </div>  
                  </div>

                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <label
                      htmlFor="img"
                      className="block text-sm font-medium text-spring-wood-500"
                    >
                      Image URL
                    </label>
                    <div className="mt-1">
                      <input
                        id="img"
                        name="img"
                        type="img"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                    </div>  
                  </div>

                </div>
                  
                {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b">
                    <button
                      className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold font-medium text-spring-wood-500 bg-vin-rouge-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Add
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