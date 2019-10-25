const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const Lessons = require('../../models/Lessons');
const uuid = require('uuid/v4');
const path = require('path');

// @route    POST api/lessons/load
// @desc     Lessons list
// @access   Public
router.post('/list', async (req, res) => {
  console.log('api lessons list');
  try {
    const lessons = await Lessons.find();

    if (lessons.length < 1) {
      return res.status(400).json({
        success: false,
        error: 'No lessons in collection'
      });
    }

    res.json({ success: true, lessons });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/lessons/create
// @desc     Create new lesson
// @access   Public
router.post('/create', async (req, res) => {
  let updateFlag = false;

  if (!!req.body.humanId) {
    updateFlag = true;
  }

  let { humanId, sport, bigPic } = req.body;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (!humanId) {
    humanId = getRandomInt(10000, 90000);
  }

  if (!sport) {
    sport = 'Занятие';
  }

  date = Date.now();

  try {
    let lesson = null;

    if (updateFlag) {
      lesson = await Lessons.findOneAndUpdate(
        { humanId: humanId },
        req.body,
        { upsert: false },
        null
      );
    } else {
      lesson = await Lessons.findOne({ humanId: humanId });
    }

    if (updateFlag && !lesson) {
      return res.status(400).json({
        success: false,
        error: 'No lesson to update'
      });
    }

    if (!updateFlag && lesson) {
      if (lesson) {
        return res.status(400).json({
          success: false,
          error: 'Lesson with this HumanId already exists'
        });
      }
    }

    if (!updateFlag) {
      lesson = new Lessons({
        humanId,
        sport,
        bigPic,
        date
      });
    }
    if (Object.keys(req.files).length !== 0) {
      let bigPic = req.files.bigPic;
      const realName = bigPic.name;
      const guidName = uuid();
      const ext = path.extname(realName);

      lesson.bigPic = {
        guid: guidName,
        ext
      };

      bigPic.mv(`./upload/${guidName}${ext}`, function(err) {
        if (err) throw new Error(err);
      });
    }

    await lesson.save();

    res.json({ success: true, lesson });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
