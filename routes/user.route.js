const express = require("express");
const mongoose = require("mongoose");
const { User } = require("../models/user.schema");

const router = express.Router();

// Get All Users
router.get("/user/all", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving users data: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// Get dta for a particular User
router.get("/user/:_id", async (req, res) => {
  try {
    const userID = new mongoose.Types.ObjectId(req.params._id);
    const result = await User.aggregate([
      { $match: { _id: userID } },
      {
        $lookup: {
          from: "educations",
          localField: "_id",
          foreignField: "uid",
          as: "education",
        },
      },
      {
        $lookup: {
          from: "achievements",
          localField: "_id",
          foreignField: "uid",
          as: "achievement",
        },
      },
      {
        $lookup: {
          from: "experiences",
          localField: "_id",
          foreignField: "uid",
          as: "experience",
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving aggregate user data: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// Create User
router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving user data: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// Update User

// Delete User
router.delete("/user/:_id", async (req, res) => {
  try {
    const result = await User.findById(req.params._id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving user data: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

module.exports = router;
