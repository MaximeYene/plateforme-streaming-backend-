const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const Song = require('./models/song');
// const Audio = require('./models/audio');

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.gkug5kv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.error('Connexion à MongoDB échouée !'));

// Middleware pour gérer le téléchargement de fichiers audio
const upload = multer({ dest: 'uploads/' });

// Endpoint POST pour l'upload de fichiers audio
app.post('/api/songs/upload', upload.single('audioFile'), async (req, res) => {
  
  try {
    if(!req.file){
      return res.status(400).json({Message:'Aucun fichier audio n a été téléchargé!'})
    }
    const { title, artist } = req.body;
  const audioFilePath = req.file.path;

  const newSong = new Song({
    title: title,
    artist: artist,
    audioFilePath: audioFilePath
  });

  } catch (err) {
    res.status(500).json({Message:'Erreur lors du traitement du fichier audio'});
  }
});


module.exports = app;
