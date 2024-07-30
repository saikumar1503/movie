const fs = require("fs");
const mongoose = require("mongoose");
const Movie = require("./../Models/movieModel");
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));

mongoose
  .connect("mongodb://localhost:27017/moviesFlix")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    await Movie.create(movies);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Movie.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

console.log(process.argv);

if (process.argv[2] == "--delete") {
  deleteData();
} else {
  importData();
}
