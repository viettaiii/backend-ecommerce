require("dotenv").config();
require("express-async-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const app = express();
// Routes
const routerProducts = require("./routes/product");
// middleware errors
const { errorHandler, notFoundHandler } = require("./middlewares");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
// security package
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/v1/products", routerProducts);
app.use(notFoundHandler);
app.use(errorHandler);
// connect server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server listenning on port " + port));