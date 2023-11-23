const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const Song= require('./models/song');

const app = express();
const upload = multer({ dest: 'uploads/' });

//Connexion a la base de donnees mongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.gkug5kv.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


// Route pour l'upload de la musique
app.post('/uploads/', upload.single('musicFile'), async (req, res) => {
    const { originalname, path } = req.file;
    res.json({message:'Musique bien enregistree'})

    // Créer une nouvelle chanson dans la base de données
    const newSong = new Song({
        title: req.body.title,
        artist: req.body.artist,
        file_path: path,  // chemin du fichier stocké
        original_file_name: originalname // Enregistrer le nom original du fichier

    });

    try {
        const savedSong = await newSong.save();
        res.status(201).send(savedSong);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = app;