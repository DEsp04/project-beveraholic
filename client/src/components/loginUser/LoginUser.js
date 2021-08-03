import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import logo from "../../images/logos/beveraholic_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/signInUserSlice";



export default function LoginUser() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  
  const userStatus = useSelector((state) => state.user);
  const dispatch = useDispatch();
  

  //---- Redux action is trigger here -----
  const login = (e) => {
    e.preventDefault();

    setShowAlert(true)
    if (loginEmail.length > 0 && loginPassword.length > 0) {
      dispatch(fetchUser({ loginEmail, loginPassword }))
    }
  };

  console.log(userStatus.status)
  
  //when user is authenticated, save token to the localhost
  if (userStatus.isAuthenticate === "true") {
    return <Redirect to="/home" />;
  }



  const alertModal = () => {
    if (userStatus.status === "failed" && showAlert) {
      return (
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Login Failed!</strong>
        <span class="block sm:inline"> Enter your email address and password to login.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3"  onClick={() => setShowAlert(false)}>
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </span>
        </div>
      )
    }
  }


  return (
    <div className="min-h-screen bg-soapstone-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md xs:mx-auto xs:w-full xs:max-w-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="Beveraholic" />
      </div>

      { alertModal()}

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md xs:mx-auto xs:w-4/5 xs:max-w-md">
        <div className="bg-shark-500 py-8 px-4 shadow sm:rounded-lg sm:px-10 xs:rounded-lg xxs:rounded-lg sm:round-lg xs:px-10 xxs:mx-2 xs:mx-2 sm:mx-2">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <h2 className="mt-6 text-center text-iv font-extrabold text-spring-wood-500">
                Hello!
              </h2>
              <h3 className="mt-2 text-center text-l text-spring-wood-500">
                Sign into your account here.
              </h3>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-spring-wood-500"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
            </div>


            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-spring-wood-500"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-spring-wood-500"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <p className="text-center text-sm text-spring-wood-500">
                  Don't have an account?{" "}
                  <NavLink
                    to={"/"}
                    className="font-medium text-spring-wood-500 hover:text-vin-rouge-500 font-bold"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold font-medium text-spring-wood-500 bg-vin-rouge-500
                hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500 "
                onClick={login}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
