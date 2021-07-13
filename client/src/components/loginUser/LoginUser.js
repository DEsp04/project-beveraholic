import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import logo from "../../images/logos/beveraholic_logo.svg";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/signInUserSlice";
import { useSelector } from "react-redux";
import loadUser from "../../utilities/loadUser";

export default function LoginUser() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const userStatus = useSelector((state) => state.user)
  const dispatch = useDispatch();
  

  //---- Redux action is trigger here -----
  const login = (e) => {
    e.preventDefault();

    if (loginEmail.length > 0 && loginPassword.length > 0) {
      dispatch(fetchUser({ loginEmail, loginPassword }))
    }
  };

  console.log(userStatus)
  //when user is authenticated, save token to the localhost
  if (userStatus.isAuthenticate === "true") {
    // const userToken = localStorage.getItem("userToken");
    // console.log(userToken);
    // setAuthToken(userToken);
    dispatch(loadUser())


    return <Redirect to="/home" />;
  }


  

  const logOutUser = () => {
    localStorage.removeItem("userToken");
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="Beveraholic" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                Hello!
              </h2>
              <h3 className="mt-2 text-center text-l text-gray-600">
                Sign into your account here.
              </h3>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
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
                className="block text-sm font-medium text-gray-700"
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
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <p className="mt-2 text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <NavLink
                    to={"/"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        {/* <div>
          <h1>Username: {userName} </h1>
          <button onClick={logOutUser}>Logout</button>
        </div> */}
      </div>
    </div>
  );
}
