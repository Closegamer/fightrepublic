const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');

// @route    POST api/masters/load
// @desc     Lessons list
// @access   Public
router.post('/', async (req, res) => {
  try {
    const masters = await Masters.find();

    res.json({
      success: true,
      mastersArray: masters
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
  console.log('api admin masters create');

  let updateFlag = false;

  if (!!req.body.humanId) {
    updateFlag = true;
  }

  let { humanId, firstName, lastName, profession, date } = req.body;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (!humanId) {
    humanId = getRandomInt(10000, 90000);
  }

  if (!firstName) {
    firstName = 'Имя';
  }

  if (!lastName) {
    lastName = 'Фамилия';
  }

  if (!profession) {
    profession = 'предмет';
  }

  try {
    let master = null;

    if (updateFlag) {
      master = await Masters.findOneAndUpdate(
        { humanId: humanId },
        req.body,
        { upsert: false },
        null
      );
    } else {
      master = await Masters.findOne({ humanId: humanId });
    }

    if (updateFlag && !master) {
      return res.status(400).json({
        success: false,
        error: 'No master to update'
      });
    }

    if (!updateFlag && master) {
      if (master) {
        return res.status(400).json({
          success: false,
          error: 'Master with this HumanId already exists'
        });
      }
    }

    if (!updateFlag) {
      master = new Lessons({
        humanId,
        firstName,
        lastName,
        profession,
        date
      });
    }

    await master.save();

    res.json({ success: true, master });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
