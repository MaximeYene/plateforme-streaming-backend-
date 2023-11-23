const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  file_path: {type: String, required:true}
});

module.exports = mongoose.model('Song', songSchema);