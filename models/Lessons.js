const mongoose = require('mongoose');

const LessonsSchema = new mongoose.Schema({
  humanId: {
    type: Number,
    required: true,
    unique: true
  },
  sport: {
    type: String,
    required: true
  },
  bigPic: {
    guid: {
      type: String,
      unique: true,
      required: true
    },
    ext: {
      type: String,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Lessons = mongoose.model('lessons', LessonsSchema);
