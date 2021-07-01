/*--------------------- Beverage category routes ---------------------*/
const { Router } = require("express");
const beverageCategoryRouter = Router();
const beverageCategoryControllers = require("../controllers/beverageCategories");

beverageCategoryRouter.post(
  "/beverageCategories",
  beverageCategoryControllers.createCategory
);

beverageCategoryRouter.get(
  "/beverageCategories",
  beverageCategoryControllers.getAllCategories
);

beverageCategoryRouter.get(
  "/beverageCategories/:id",
  beverageCategoryControllers.getCategoryByID
);

beverageCategoryRouter.put(
  "/beverageCategories/:id",
  beverageCategoryControllers.updateCategory
);

beverageCategoryRouter.delete(
  "/beverageCategories/:id",
  beverageCategoryControllers.deleteCategory
);

/************************/
beverageCategoryRouter.get(
  "/beverageCategories/:id/beverages",
  beverageCategoryControllers.getAllBeveragesByCategories
);
/***********************/

module.exports = beverageCategoryRouter;
