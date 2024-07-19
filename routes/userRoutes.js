const router = require("express").Router();
const {authenticationToken} = require("./userAuth");

const {
  signup,
  signin,
  getUserInformation,
  updateAddress
} = require("../controllers/userController");

// Signup
router.post("/signup", signup);

// Sign in
router.post("/signin", signin);

// Get user information
router.get("/getuserinformation", authenticationToken, getUserInformation);

// Update address
router.put("/updateaddress", authenticationToken, updateAddress);

module.exports = router;
