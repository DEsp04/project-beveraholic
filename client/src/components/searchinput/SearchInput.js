import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";

const dropDown = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const items = [
  { name: "category 1", href: "#" },
  { name: "category 2", href: "#" },
  { name: "category 3", href: "#" },
];

export default function SearchInput() {
  let [isOpen, setIsOpen] = useState(true);

  const openForm = (...classes) => {
    setIsOpen(false);
  };

  const closeForm = (...classes) => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
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

          
          
          {/* <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Categories
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={dropDown(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu> */}
        </div>
        <>
          <button
            type="button"
            className="bg-transparent border border-gray-300 rounded-sm font-bold py-2 px-4 text-vin-rouge-500 sm:text-sm text-yellow  hover:bg-vin-rouge-500 hover:text-white-500 hover:border-vin-rouge-500"
            onClick={openForm}
          >
            Add Beverage
          </button>

          
        </>
      </div>
    </div>
  );
}
