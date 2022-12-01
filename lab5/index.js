const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const fs = require("fs");
const d = new Date();
const routeResponseMap = {
  "/": "views/index.html",
  "/books.html":"views/books.html",
  "/book1.html":"views/book1.html",
  "/book2.html":"views/book2.html",
  "/book3.html":"views/book3.html",
  "/p1.jpg":"public/images/p1.jpg",
  "/p2.jpg":"public/images/p2.jpg",
  "/p3.jpg":"public/images/p3.jpg",
  "/error":"views/error.html",
}
const app = http.createServer();
app.on("request", (req, res) => {
  console.log('Received an incoming request...');
  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });

  if (routeResponseMap[req.url]) {
    fs.readFile(routeResponseMap[req.url], (error, data) => {
      res.write(data);
      res.end();
    });
  } else {
    console.log('Error:',d)
    fs.readFile(routeResponseMap["/error"], (error, data) => {
      res.write(data);
      res.end();
    });
  }
});
app.listen(port);
console.log('The server has started and is listening on port number:$',{port});
