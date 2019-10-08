const mongoose = require('mongoose');

const LessonsSchema = new mongoose.Schema({
  humanId: {
    type: Number,
    required: true,
    unique: true
  },
  lesson: {
    type: String,
    required: true
  },
  master: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Lessons = mongoose.model('lessons', LessonsSchema);
