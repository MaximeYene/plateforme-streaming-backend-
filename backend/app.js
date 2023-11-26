const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const Song = require('./models/song');

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.gkug5kv.mongodb.net/UploadsDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.error('Connexion à MongoDB échouée !'));

// Middleware pour gérer le téléchargement de fichiers audio
const upload = multer({ dest: 'uploads/' });

// Endpoint POST pour l'upload de fichiers audio
app.post('/api/songs/upload', upload.single('audioFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier audio n a été téléchargé!' });
    }
    const { title, artist } = req.body;
    const audioFilePath = req.file.path;

    const newSong = new Song({
      title: title,
      artist: artist,
      audioFilePath: audioFilePath
    });

    await newSong.save();

    res.status(201).json({ message: 'Fichier audio téléchargé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors du traitement du fichier audio' });
  }
});

// Endpoint GET pour récupérer un fichier audio par son titre
app.get('/api/songs/audio', async (req, res) => {
  try {
    const title = req.query.title;
    const artist=req.query.artist;
    const song = await Song.findOne({ title: title });

    if (!song) {
      return res.status(404).json({ message: 'Fichier audio non trouvé' });
    }

    res.json({ title: song.title, artist: song.artist, audioFilePath: song.audioFilePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération du fichier audio' });
  }
});

module.exports = app;
