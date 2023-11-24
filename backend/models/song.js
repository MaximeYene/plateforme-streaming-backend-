// models/song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  audioFilePath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Song', songSchema);
