const express = require("express");
const morgon = require("morgan");
const moviesRouter = require("./Routes/moviesRoutes");
const fs = require("fs");
const app = express();

//custom middleware
const logger = (req, res, next) => {
  console.log("logged");
  next();
};
app.use(express.json());
app.use(morgon("dev"));
app.use(logger);
app.use(express.static("./public"));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

app.use("/api/movies", moviesRouter);

module.exports = app;
