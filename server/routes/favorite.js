/*--------------------- Beverage routes ---------------------  */
const { Router } = require("express");
const favoriteRouter = Router();
const favoriteControllers = require("../controllers/favorites");


const { beverageValidator } = require("../validators/index");
const auth = require("../config/authentication");

favoriteRouter.post(
  "/favorites",
  auth,
  beverageValidator(),
  favoriteControllers.createFavorite
);

 favoriteRouter.get("/favorites/:id", favoriteControllers.getAllFavorites);

// favoriteRouter.get(
//   "/:user_id/favorites",
//   auth,
//   favoriteControllers.getAllFavoritesByCurrentUser
// );

// favoriteRouter.get("/favorites/:id", auth, favoriteControllers.getFavoriteByID);



favoriteRouter.delete(
  "/favorites/:id",
  auth,
  favoriteControllers.deleteFavorite
);

module.exports = favoriteRouter;