const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./SwaggerConfig');
const Song = require('./models/song');
const SaveSearch = require('./models/saveSearch')

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.gkug5kv.mongodb.net/UploadsDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.error('Connexion à MongoDB échouée !'));

// Middleware pour gérer l upload de fichiers audio
const upload = multer({ dest: 'uploads/' });

//Liddleware pour gerer la sauvegarde des recherches
const saveSearchAudio = multer({ dest: 'saveResearch/' });

// Insertion du code Swagger
const swaggerDocs = swaggerConfig; // Récupération de la configuration Swagger depuis le fichier séparé
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// Fin de l'insertion du code de Swagger

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


//Endpoint POST pour la sauvegarde des recherches
app.post('/api/saveSearch', saveSearchAudio.single('audioFile'), async (req, res) => {
  try {
    const { title, artist } = req.body;

    const audioFilePath = req.file.path;

    const newSave = new SaveSearch({
      title: title,
      artist: artist,
      audioFilePath: audioFilePath
    });
    await newSave.save(); // Enregistrement des données dans la base de données

    res.status(201).json({ message: 'Recherche enregistrée avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de l'enregistrement de la recherche" })
  }
});


// Endpoint GET pour récupérer un fichier audio par son titre
app.get('/api/songs/audio', async (req, res) => {
  try {
    const title = req.query.title;
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


//Endpoint GET pour afficher toutes la liste de tous les audio recherchés par artiste
app.get('/api/songs/allAudio', async (req, res) => {
  try {
    const artist = req.query.artist;
    const song = await Song.find({ artist: artist })

    if (!song) {
      return res.status(404).json({ message: 'fichiers audio non trouvés' })
    }
    res.json(song);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la recuperation des fichiers audio' })
  }
})

// Endpoint GET pour télécharger un fichier audio par son titre
app.get('/api/songs/download', async (req, res) => {
  try {
    const title = req.query.title;
    const song = await Song.findOne({ title: title });

    if (!song) {
      return res.status(404).json({ message: 'Fichier audio non trouvé' });
    }

    // Récupérer le chemin du fichier audio à partir de la base de données
    const audioFilePath = song.audioFilePath;

    // Envoyer le fichier audio au client
    res.download(audioFilePath, `${title}.mp3`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors du téléchargement du fichier audio' });
  }
});

module.exports = app;