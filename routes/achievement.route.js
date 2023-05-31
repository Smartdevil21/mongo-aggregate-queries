const express = require("express");
const { Achievement } = require("../models/user.schema");
const router = express.Router();

// To get ll acheivement entries
router.get("/achievement", async (req, res) => {
  try {
    const result = await Achievement.find();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving Achievement entries: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// to get all the Achievement entries of user with userID `uid`
router.get("/achievement/user/:uid", async (req, res) => {
  try {
    const result = await Achievement.find({ uid: req.params.uid });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving Achievement entries: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To get a specific Achievement entry using _id
router.get("/achievement/:_id", async (req, res) => {
  try {
    const result = await Achievement.find({ _id: req.params._id });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving single Achievement entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To add Achievement
router.post("/achievement", async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    const result = await achievement.save();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving creating Achievement entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

// To remove Achievement entry
router.delete("/achievement/:_id", async (req, res) => {
  try {
    const result = await Achievement.findByIdAndDelete(req.params._id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Err in retrieving single Achievement entry: ${error}`);
    res.status(400).json({
      success: false,
      error: `${error}`,
    });
  }
});

module.exports = router;
