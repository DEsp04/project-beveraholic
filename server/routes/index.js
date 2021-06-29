const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");






router.get("/", (req, res) => {
  res.send("This is the root");
});

//---------------------User routes------------------------
//post request for login, register and user.
router.post("/register", controllers.createRegistration);

router.post("/login", controllers.loginUser);

router.get("/user", (req, res) => {
  res.send(req.user);
});



// //---------------------Beverage routes------------------------

router.post("/beverages", controllers.createBeverage);

router.get("/beverages", controllers.getAllBeverages);

router.get("/beverages/:id", controllers.getBeverageByID);

router.post("/beverages/:id", controllers.updateBeverage);

router.delete("/beverages/:id", controllers.deleteBeverage);

/************************/
router.get(
  "/beverageCategories/:id/beverages",
  controllers.getAllBeveragesByCategories
);
/************************/

router.post("/beverageCategories", controllers.createCategory);

router.get("/beverageCategories", controllers.getAllCategories);

router.get("/beverageCategories/:id", controllers.getCategoryByID);

router.post("/beverageCategories/:id", controllers.updateCategory);

router.delete("/beverageCategories/:id", controllers.deleteCategory);



module.exports = router;

