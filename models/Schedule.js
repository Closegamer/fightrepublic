const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  data: {
    type: [[String]],
    required: true
  }
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);
