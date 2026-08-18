const mongoose = require("mongoose");

const SitesSchema = new mongoose.Schema({
  humanId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  ratingParam: {
    type: String,
    required: true
  },
  domainEmpty: {
    type: Boolean,
    required: true
  },
  extraInfo: {
    type: Number,
    required: true
  }
});

module.exports = Sites = mongoose.model("sites", SitesSchema);
