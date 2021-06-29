import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Home from "./screens/home/home";
import Favorites from "./screens/favorites/Favorites";
import About from "./screens/about/about";
import User from "./screens/user/User";
import { useEffect, useState } from "react";

function App() {

  const history = useHistory();

  const ayman = localStorage.getItem("userInfo");
  console.log("this is from app.js:", ayman);

  useEffect(() => {
    if (ayman) {
      history.push("/home");
    }
  }, []);


  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/user-profile">
            <User />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
