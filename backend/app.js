const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

//Connexion a la base de donnees mongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.gkug5kv.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Les fichiers téléchargés seront enregistrés dans le dossier "uploads"
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Le nom du fichier téléchargé sera conservé
  }
});

const upload = multer({ storage: storage });

// Route pour l'upload de fichiers audio
app.post('/uploadSong', upload.single('audioFile'), async (req, res) => {
  // Extraction des informations de la chanson depuis la requête
  const { title, artist } = req.body;
  const audioFilePath = req.file.path; // Récupérer le chemin du fichier audio

  // Utilisez le modèle de chanson pour enregistrer la chanson dans la base de données
  const newSong = new Song({
    title: title,
    artist: artist,
    audioFilePath: audioFilePath
  });

  try {
    const savedSong = await newSong.save();
    res.status(201).json(savedSong); // Renvoyer la chanson enregistrée
  } catch (err) {
    res.status(400).send(err); // En cas d'erreur, renvoyer un code de statut d'erreur
  }
});

module.exports = app;
