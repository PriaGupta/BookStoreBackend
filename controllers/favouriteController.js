const User = require("../models/user");

const addBookToFavorite = async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);

    if (userData.favourites.includes(bookid)) {
      return res.status(200).json({ message: "Book is already in favourites" });
    }

    await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
    return res.status(200).json({ message: "Book added to favourites" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const removeBookFromFavorite = async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);

    if (userData.favourites.includes(bookid)) {
      await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
    }

    return res.status(200).json({ message: "Book removed from favourites" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getFavoriteBooks = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favourites");
    const favoriteBooks = userData.favourites;

    return res.status(200).json({
      status: "Success",
      data: favoriteBooks,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addBookToFavorite,
  removeBookFromFavorite,
  getFavoriteBooks,
};
