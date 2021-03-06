import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Home from "./screens/home/home";
import Favorites from "./screens/favorites/Favorites";
import About from "./screens/about/about";
import BeverageDetail from "./screens/beverageDetail/BeverageDetail"
import PrivateRoute from "./routing/PrivateRoute";
import Footer from "./components/footer/Footer";


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
          <PrivateRoute exact path="/beverage-detail" component={BeverageDetail} />
          
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
