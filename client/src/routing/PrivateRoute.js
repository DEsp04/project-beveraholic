import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




const PrivateRoute = ({
  component: Component,
  ...rest
}) => {

  const reduxState = useSelector((state) => state)
  const isAuthenticate = reduxState.user.isAuthenticate;
  const status = reduxState.loadedUser.status;

  console.log(status)


  return <Route
    {...rest}
    render={(props) =>
     isAuthenticate === "true" || status === "success" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
}


export default PrivateRoute;