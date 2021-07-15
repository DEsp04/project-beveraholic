import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Home from "./screens/home/home";
import Favorites from "./screens/favorites/Favorites";
import About from "./screens/about/about";
import User from "./screens/user/User";
import PrivateRoute from "./routing/PrivateRoute";

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

          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/about-us" component={About} />

          {/* <Route exact path="/user-profile">
            <User />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
