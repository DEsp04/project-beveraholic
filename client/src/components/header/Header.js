import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../images/logos/beveraholic_logo.svg";
import icon from "../../images/logos/beveraholic_icon.svg";


const navigation = [
  { name: "Home", to: "/home", current: false },
  { name: "Favorite Recipes", to: "/favorites", current: false },
  { name: " About", to: "/about-us", current: false },
];

const userNavigation = [{ name: "Log out", to: "/" }];

const dropDown = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const logOut = () => {
  localStorage.removeItem("userToken");
}

export default function Header() {
  const userStatus = useSelector((state) => state);
  console.log("HEADER***", userStatus)

  const userNam = userStatus?.loadedUser?.loadedUser?.username
  const emailAddr = userStatus?.loadedUser?.loadedUser?.email

  const user = {
    name: userNam,
    emailAdress: emailAddr,
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  return (
    <div className="min-h-full bg-albescent-white-500">
      <Disclosure as="nav" className="bg-white border-b border-albescent-white-500">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                  <NavLink
                    to="/home"
                    >
                    <img
                      className="block lg:hidden h-10 w-auto"
                      src={icon}
                      alt="Beveraholic"
                      />
                  </NavLink>
                    
                    <NavLink
                    to="/home"
                    >
                    <img
                      className="hidden lg:block h-14 w-auto"
                      src={logo}
                      alt="Beveraholic"
                      />
                  </NavLink>     
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={dropDown(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-black-500 hover:border-vin-rouge-500 hover:text-vin-rouge-500",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.to}
                                    className={dropDown(
                                      active ? "bg-vin-rouge-500 text-white-500" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                    onClick={logOut}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-vin-rouge-500 inline-flex items-center justify-center p-2 rounded-md text-white-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={dropDown(
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-600 hover:bg-vin-rouge-500 hover:border-white-500 hover:text-white-500",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.emailAdress}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-white-500 hover:bg-vin-rouge-500"
                      onClick={logOut}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
