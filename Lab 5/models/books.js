const mongoose = require("mongoose"),
  booksSchema = mongoose.Schema({
    id: String,
    title: String,
    description: String,
    author: String,
    cover: String,
  });
module.exports = mongoose.model("Books", booksSchema);