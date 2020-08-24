const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const Lessons = require("../../models/Lessons");
const Sites = require("../../models/Sites");
const uuid = require("uuid/v4");
const path = require("path");

// @route    POST api/sites/list
// @desc     Sites list
// @access   Public
router.post("/list", async (req, res) => {
  console.log("api sites list");
  try {
    const sites = await Sites.find();

    if (sites.length < 1) {
      return res.status(400).json({
        success: false,
        error: "No sites in collection"
      });
    }
    res.json({ success: true, sites });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
