import axios from "axios";




//this will put the token on axios header as default for when a get req is done for the user route we will get the email, username and id
export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
}
