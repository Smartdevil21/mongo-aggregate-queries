const mongoose = require("mongoose");

// Define schema for Education collection
const educationSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  proof: String,
});

// Define schema for Experience collection
const experienceSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  proof: String,
});

// Define schema for Achievement collection
const achievementSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  proof: String,
});

// Define schema for User collection
const userSchema = new mongoose.Schema({
  // Schema fields for user data
  name: String,
  email: String,
});

// Create models for each collection
const Education = mongoose.model("Education", educationSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const Achievement = mongoose.model("Achievement", achievementSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Education, Experience, Achievement, User };
