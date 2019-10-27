const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const Schedule = require('../../models/Schedule');
const uuid = require('uuid/v4');
const path = require('path');

// @route    POST api/lessons/load
// @desc     Lessons list
// @access   Public
router.post('/load', async (req, res) => {
  const { day } = req.body;
  console.log('api days load ' + day);
  try {
    const rows = await Schedule.findOne({ day });
    console.log(rows);
    res.json({ success: true, rows: rows ? rows.data : [] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/days/save
// @desc     Saving lessons
// @access   Public
router.post('/save', async (req, res) => {
  console.log('api days save');
  const { data, day } = req.body;

  try {
    await Schedule.updateOne({ day }, { day, data }, { upsert: true });

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
