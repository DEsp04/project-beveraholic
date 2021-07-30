/*--------------------- Beverage routes ---------------------  */
const { Router } = require("express");
const beverageRouter = Router();
const beverageControllers = require("../controllers/beverages");
const { beverageValidator } = require("../validators/index");
const auth = require("../config/authentication");

beverageRouter.post(
  "/",
  auth,
  beverageValidator(),
  beverageControllers.createBeverage
);

beverageRouter.get("/beverages", beverageControllers.getAllBeverages);

beverageRouter.get(
  "/:user_id/beverages",
  auth,
  beverageControllers.getAllBeveragesByCurrentUser
);

beverageRouter.get("/beverages/:id", auth, beverageControllers.getBeverageByID);

beverageRouter.put("/beverages/:id", auth, beverageControllers.updateBeverage);

beverageRouter.delete(
  "/beverages/:id",
  auth,
  beverageControllers.deleteBeverage
);

module.exports = beverageRouter;
