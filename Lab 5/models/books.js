const mongoose = require("mongoose"),
  booksSchema = mongoose.Schema({
    name: String,
    summary: String,
    author: String,
    picture: String,
  });
module.exports = mongoose.model("Books", booksSchema);