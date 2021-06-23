import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
