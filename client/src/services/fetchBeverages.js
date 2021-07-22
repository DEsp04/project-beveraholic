import axios from "axios";

export const userUrl = "https://beveraholic.herokuapp.com/api/user";
export const beveragelUrl = "https://beveraholic.herokuapp.com/api/beverages";




export const getBeverages = async () => {
  const response = await axios.get(beveragelUrl).then(({ data }) => {
    return data;
  });
  console.log(response);
  return response;
};

export const getUsers = async () => {};

export const getBeveragesByUsers = async () => {};
