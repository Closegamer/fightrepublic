const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const Masters = require('../../models/Masters');
const uuid = require('uuid/v4');
const path = require('path');

// @route    POST api/masters/load
// @desc     Lessons list
// @access   Public
router.post('/list', async (req, res) => {
  console.log('api masters list');
  try {
    const masters = await Masters.find();

    if (masters.length < 1) {
      return res.status(400).json({
        success: false,
        error: 'No masters in collection'
      });
    }

    res.json({ success: true, masters });
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
  console.log(req.body);
  let updateFlag = false;

  if (!!req.body.humanId) {
    updateFlag = true;
  }

  let { humanId, firstName, lastName, bigPic } = req.body;

  console.log('req.body: ', req.body);
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

  date = Date.now();

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
      master = new Masters({
        humanId,
        firstName,
        lastName,
        bigPic,
        date
      });
    }
    if (Object.keys(req.files).length !== 0) {
      let bigPic = req.files.bigPic;
      const realName = bigPic.name;
      const guidName = uuid();
      const ext = path.extname(realName);

      master.bigPic = {
        guid: guidName,
        ext
      };

      bigPic.mv(`./upload/${guidName}${ext}`, function(err) {
        if (err) throw new Error(err);
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
