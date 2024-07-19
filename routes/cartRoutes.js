
const router = require("express").Router();
const { authenticationToken } = require("./userAuth");
const {
  addToCart,
  removeFromCart,
  getUserCart
} = require("../controllers/cartController");

// add book to cart
router.put("/addtocart", authenticationToken, addToCart);

// remove book from cart
router.put("/removefromcart/:bookid", authenticationToken, removeFromCart);

// get items in cart of an individual user
router.get("/getusercart", authenticationToken, getUserCart);

module.exports = router;
