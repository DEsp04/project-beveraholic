//Beverage routes to backend
const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/beverageCategories", controllers.createBeverage);

router.get("/beverageCategories", controllers.getAllBeverages);

router.get("/beverageCategories/:id", controllers.getBeverageByID);

router.post("/beverageCategories/:id", controllers.updateBeverage);

router.delete("/beverageCategories/:id", controllers.deleteBeverage);

/************************/
router.get(
  "/beverages/:id/beverageCategories",
  controllers.getAllBeveragesByCategories
);
/************************/

router.post("/beverages", controllers.createCategory);

router.get("/beverages", controllers.getAllCategories);

router.get("/beverages/:id", controllers.getCategoryByID);

router.post("/beverages/:id", controllers.updateCategory);

router.delete("/beverages/:id", controllers.deleteCategory);

module.exports = router;
