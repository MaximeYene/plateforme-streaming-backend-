const express = require('express');
const multer = require('multer');
const cors=require('cors');
const mongoose=require('mongoose');
const Song = require('./models/song');
const app = express();


// Configuration de CORS pour permettre l'accès à l'API depuis tous les domaines
app.use(cors());

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Endpoint de l'API pour les chansons
app.use('/api/songs', Song);

//Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/musicDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.error('Connexion à MongoDB échouée !'));


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpoint POST pour l'upload de fichiers audio
app.post('/upload', upload.single('audioFile'), async (req, res) => {
  const { title, artist } = req.body;
  const audioFilePath = req.file.path;

  const newSong = new Song({
    title: title,
    artist: artist,
    audioFilePath: audioFilePath
  });

  try {
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Endpoint GET pour récupérer un fichier audio par son ID
app.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.status(200).sendFile(song.audioFilePath);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Votre modèle MongoDB pour l'audio
const Audio = require('./models/song'); // Assurez-vous d'avoir un modèle défini pour votre audio

// La route pour télécharger l'audio
app.get('/audio/:audioId', async (req, res) => {
  const audioId = req.params.audioId;

  try {
    const audio = await Audio.findById(audioId);

    if (!audio) {
      // Gérer le cas où l'audio n'est pas trouvé
      return res.status(404).json({ message: "Audio not found" });
    }

    // Envoyer le fichier audio en réponse
    res.set('Content-Type', audio.mimeType);
    res.set('Content-Disposition', attachment; filename=${audio.fileName});
    res.send(Audio.audioData);

  } catch (error) {
    // Gérer toute erreur survenue lors de la recherche de l'audio
    res.status(500).json({ message: "Error downloading audio" });
  }
});



module.exports = app;
