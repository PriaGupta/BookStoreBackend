const User = require("../models/user");
const Order = require("../models/order");
const Book = require("../models/book");

const placeOrder = async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;
    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromOb = await newOrder.save();
      
      // saving order in user
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromOb._id },
      });
      
      // clearing cart
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }
    return res.json({ status: "Success", message: "Order Placed Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

const getOrderHistoryOfUser = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const ordersData = userData.orders.reverse();
    return res.json({ status: "Success", data: ordersData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const userData = await Order.find()
      .populate({ path: "book" })
      .populate({ path: "user" })
      .sort({ createdAt: -1 });
      
    return res.json({ status: "Success", data: userData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { status: req.body.status });
    return res.json({ status: "Success", message: "Status Updated Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  placeOrder,
  getOrderHistoryOfUser,
  getAllOrders,
  updateOrderStatus
};
