const { signup, login } = require("../Controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/signup", signupValidation, signup);
module.exports = router;
router.post("/login", loginValidation, login);
module.exports = router;
