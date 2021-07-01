/*--------------------- Beverage routes ---------------------  */
const { Router } = require("express");
const beverageRouter = Router();
const beverageControllers = require("../controllers/beverages");

beverageRouter.post("/beverages", beverageControllers.createBeverage);

beverageRouter.get("/beverages", beverageControllers.getAllBeverages);

beverageRouter.get("/beverages/:id", beverageControllers.getBeverageByID);

beverageRouter.put("/beverages/:id", beverageControllers.updateBeverage);

beverageRouter.delete("/beverages/:id", beverageControllers.deleteBeverage);

module.exports = beverageRouter;
