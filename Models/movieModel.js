const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "duration is required"],
  },
  rating: {
    type: Number,
  },
  totalrating: {
    type: Number,
  },
  releaseYear: {
    type: Number,
  },
  releaseDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  genres: {
    type: [String],
  },
  directors: {
    type: [String],
  },
  coverImage: {
    type: String,
  },
  actors: {
    type: [String],
  },
  price: {
    type: Number,
  },
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
