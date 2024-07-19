const router = require("express").Router();
const {authenticationToken} = require("./userAuth");

const {
  placeOrder,
  getOrderHistoryOfUser,
  getAllOrders,
  updateOrderStatus
} = require("../controllers/orderController");

// place order
router.post("/placeorder", authenticationToken, placeOrder);

// get order history of a particular user
router.get("/getorderhistoryofuser", authenticationToken, getOrderHistoryOfUser);

// get all orders (admin)
router.get("/getallorders", authenticationToken, getAllOrders);

// update order status by admin
router.put("/updatestatus/:id", authenticationToken, updateOrderStatus);

module.exports = router;
