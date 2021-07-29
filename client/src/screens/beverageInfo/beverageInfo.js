import Layout from "../../components/layout/Layout"
import { NavLink, Redirect } from "react-router-dom";
import EditRecipe from '../../components/editRecipe/EditRecipe';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchDrinks } from "../../redux/beveragesSlice";
import { updateBeverage } from "../../redux/editBeverageSlice"



export default function BeverageInfo(props) {

  const { name, image, content, ingredient, instruction, beverageId } = props?.location?.state

  const[item, setItem] = useState({name, image, content, ingredient, instruction, beverageId}) 
  console.log("HERE IS ITEMS", item)

  console.log("ONLY PROPS", props.location)

  const state = useSelector((state) => state);
  const editState =  useSelector((state) => state.editItem.editDrink);
  // console.log(state.editItem.status)
  console.log("HERE IS EDIT STATE", editState)
  console.log("Here is PROPS", props.location.state.name)
  
  const [beverage, setBeverage] = useState({ isBeverage: props.location.pathname === "/beverageInfo"})

  const deductBeverage = () => {
    const beveragePath = props.location.pathname === "/beverageInfo";

    if (!beveragePath) {
      setBeverage(prevState => ({
        ...prevState,
        isBeverage: false
      }));
    }

    if (beveragePath) {
      setBeverage(prevState => ({
        ...prevState,
        isBeverage: true
      }));
    }
  }

  const dispatch = useDispatch();

  const update = () => {
    // e.preventDefault();

    dispatch(updateBeverage({ item }))
    props.setUpdated(true)
        
    {props.updated && <Redirect to="/home" /> }
    console.log("hello")

  }
  

  
  useEffect(() => {
    update()
    deductBeverage()
    return () => {
      deductBeverage();
    };

  }, [beverage.isBeverage]);
  

  


  return (
    <Layout>
      <main className="py-10">
        <EditRecipe item={item} setItem={setItem} update={update}  />

        

        <div className="max-w-7xl mx-auto mt-10 sm:px-6 lg:px-8" >
        <div className="mt-1 flex justify-center rounded-md mb-8">
            <NavLink
              to={{pathname: "/home"}}
            >
            <button
              className="md:mx-10 mx-0 bg-transparent border border-gray-300 rounded-md font-bold py-2 px-4 text-vin-rouge-500 sm:text-sm text-yellow  hover:bg-vin-rouge-500 hover:text-white-500 hover:border-vin-rouge-500"
              type="button"
              // onClick={() => setShowModal(true)}
            >
               Go Back
              </button>
            </NavLink>      

            <button
              className="md:mx-10 mx-0 bg-transparent border border-gray-300 rounded-md font-bold py-2 px-4 text-vin-rouge-500 sm:text-sm text-yellow  hover:bg-vin-rouge-500 hover:text-white-500 hover:border-vin-rouge-500"
              type="button"
              // onClick={() => setShowModal(true)}
            >
               Save
            </button>
          </div>
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
            <p className="my-4"><span className="bg-vin-rouge-500 text-spring-wood-500 rounded-sm px-2 py-1">Instruction:</span> {props.location.state.instruction}</p>
            </div>
            {/* /End replace */}
          </div>
        </main>
    </Layout> 
  )
}
