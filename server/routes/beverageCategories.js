/*--------------------- Beverage category routes ---------------------*/
const { Router } = require("express");
const beverageRouter = Router();
const beverageCategoryControllers = require("../controllers/beverageCategories");

beverageRouter.post(
  "/beverageCategories",
  beverageCategoryControllers.createCategory
);

beverageRouter.get(
  "/beverageCategories",
  beverageCategoryControllers.getAllCategories
);

beverageRouter.get(
  "/beverageCategories/:id",
  beverageCategoryControllers.getCategoryByID
);

beverageRouter.put(
  "/beverageCategories/:id",
  beverageCategoryControllers.updateCategory
);

beverageRouter.delete(
  "/beverageCategories/:id",
  beverageCategoryControllers.deleteCategory
);

/************************/
beverageRouter.get(
  "/beverageCategories/:id/beverages",
  beverageCategoryControllers.getAllBeveragesByCategories
);
/***********************/
