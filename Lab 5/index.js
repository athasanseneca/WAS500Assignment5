const mongoose = require("mongoose");

const express = require("express"),
  app = express(),
  Books = require("./models/books"),
  BooksController = require("./controllers/booksController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts, express.static(__dirname));
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

mongoose.connect(
  "mongodb+srv://athasan:tQpyWcfk18LgPWCf@was500.mz213jz.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use((req, res, next) => {
  date = new Date();
  console.log(`request made to: ${req.url} at ${date}`);
  next();
});

app.get("", (req, res) => {
  res.render('index');
});

app.get("/books.html", BooksController.getAllBooks, (req, res) => {
  res.render('books', { books: req.data });
});


app.get("/books/:books", BooksController.getBook, (req, res) => {
  res.render('bookpage', { info: req.data });
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(
    `Server running at http://localhost:${app.get("port")}`
  );
});