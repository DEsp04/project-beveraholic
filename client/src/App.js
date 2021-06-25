import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Favorites from "./screens/favorites/Favorites";
import About from "./screens/about/About";
import User from "./screens/user/User";

function App() {
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
