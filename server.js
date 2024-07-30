const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/moviesFlix")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const port = 4000;
app.listen(port, () => {
  console.log("server has started");
});
