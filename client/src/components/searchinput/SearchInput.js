import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
import NewRecipe from "../addNewRecipe/NewRecipe";
import { incrementWord } from "../../redux/searchTermSlice";
import { useDispatch, useSelector } from 'react-redux';


export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incrementWord(searchTerm));
  }, [searchTerm])
  

  return (
    <div>
      <div className="mt-1 flex xs:flex-col xs:mx-4 xxs:flex-col xxs:mx-4 justify-center rounded-md mb-12">
        <div className="xxs:w-full xs:w-full sm:w-1/2 md:w-1/2 md:mx-10 mx-0 w-1/3 lg:w-1/3 xl:w-1/3 relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-full pl-10 sm:text-sm border-gray-300"
            placeholder="Search"
            onChange={e => { setSearchTerm(e.target.value)} }
          />
        </div>
        <>
          <NewRecipe />
        </>
      </div>
    </div>
  );
}
