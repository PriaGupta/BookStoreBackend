const router = require("express").Router();
const {authenticationToken} = require("./userAuth");

const {
  addBookToFavorite,
  removeBookFromFavorite,
  getFavoriteBooks
} = require("../controllers/favouriteController");

// Add book to favorites
router.put("/add-bookto-favourite", authenticationToken, addBookToFavorite);

// Remove book from favorites
router.put("/remove-bookfrom-favourite", authenticationToken, removeBookFromFavorite);

// Get favorite books for a particular user
router.get("/get-favourite-books", authenticationToken, getFavoriteBooks);

module.exports = router;
