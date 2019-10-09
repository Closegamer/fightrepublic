const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');

// @route    POST api/lessons/load
// @desc     Lessons list
// @access   Public
router.post('/', async (req, res) => {
  try {
    const lessons = await Lessons.find();

    res.json({
      success: true,
      lessonsArray: lessons
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/lessons/create
// @desc     Create new lesson
// @access   Public
router.post('/create', async (req, res) => {
  console.log('api admin lessons create');

  let updateFlag = false;

  if (!!req.body.humanId) {
    updateFlag = true;
  }

  let { humanId, lesson, master, age, date } = req.body;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (!humanId) {
    humanId = getRandomInt(10000, 90000);
  }

  if (!lesson) {
    lesson = 'Занятие';
  }

  if (!master) {
    master = 'Тренер';
  }

  if (!age) {
    age = 'adults';
  }

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
        lesson,
        master,
        age,
        date
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
