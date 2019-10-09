const mongoose = require('mongoose');

const MastersSchema = new mongoose.Schema({
  humanId: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Masters = mongoose.model('masters', MastersSchema);
