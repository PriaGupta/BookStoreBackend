const router = require("express").Router();
const { authenticationToken } = require("./userAuth");
const {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getRecentsBooks,
  getBookById
} = require("../controllers/bookController");

// add-book as admin
router.post("/addbook", authenticationToken, addBook);

// update book as admin
router.put("/updatebook", authenticationToken, updateBook);

// delete book as admin
router.delete("/deletebook", authenticationToken, deleteBook);

// get all books 
router.get("/getallbooks", getAllBooks);

// get recents books limit as 4
router.get("/getrecentsbooks", getRecentsBooks);

// get book by particular id
router.get("/getbookbyid/:id", getBookById);

module.exports = router;
