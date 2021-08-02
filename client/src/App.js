import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Home from "./screens/home/home";
import Favorites from "./screens/favorites/Favorites";
import About from "./screens/about/about";
import BeverageInfo from "./screens/beverageInfo/BeverageInfo"
import User from "./screens/user/User";
import PrivateRoute from "./routing/PrivateRoute";
import Footer from "./components/footer/Footer";
import FullHeight from "react-full-height";

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
          <PrivateRoute exact path="/beverage-info" component={BeverageInfo} />
          
          {/* <Route exact path="/user-profile">
            <User />
          </Route> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
