//User routes to backend
const { Router } = require("express");
const controllers = require("../controllers/users");
const router = Router();

//post request for login, register and user.
router.post("/register", controllers.createRegistration);

router.post("/login", controllers.loginUser);

router.get("/user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
