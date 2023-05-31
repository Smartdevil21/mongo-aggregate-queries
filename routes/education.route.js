const express = require("express");
const { Education, User } = require("../models/user.schema");
const router = express.Router();

// to get all the education entries
router.get("/education", async (req, res) => {
  try {
    const result = await Education.find();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving education entries: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To get all the education entries for user with userID `uid`
router.get("/education/user/:uid", async (req, res) => {
  try {
    const result = await Education.find({ uid: req.params.uid });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving education entries: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To get a specific education entry using _id
router.get("/education/:_id", async (req, res) => {
  try {
    const result = await Education.find({ _id: req.params._id });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving single education entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To add education
router.post("/education", async (req, res) => {
  try {
    const education = new Education(req.body);
    const result = await education.save();
    // const updatedUser = await User.findByIdAndUpdate(req.params.uid, {
    //   $push: { education: result._id },
    // });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving creating education entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To remove education entry
router.delete("/education/:_id", async (req, res) => {
  try {
    const result = await Education.findByIdAndDelete(req.params._id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving single education entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

module.exports = router;
