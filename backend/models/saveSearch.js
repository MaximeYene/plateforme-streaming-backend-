const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
      },
      artist: {
        type: String,
        // required: true
      },
      audioFilePath: {
        type: String,
        // required: true
      }})

module.exports=mongoose.model('SaveSearch', saveSchema);