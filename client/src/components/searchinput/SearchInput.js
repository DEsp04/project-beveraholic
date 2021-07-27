import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
import NewRecipe from "../addNewRecipe/NewRecipe";




export default function SearchInput() {
  let [isOpen, setIsOpen] = useState(true);


  // const dropDown = (...classes) => {
  //   return classes.filter(Boolean).join(" ");
  // };
  


  return (
    <div>
      <div className="mt-1 flex justify-center rounded-md mb-12">
        <div className="md:mx-10 mx-0 w-1/3 lg:w-1/4 relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-full pl-10 sm:text-sm border-gray-300"
            placeholder="Search"
          />
        </div>
        <>
          <NewRecipe />
        </>
      </div>
    </div>
  );
}
