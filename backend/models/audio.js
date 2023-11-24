const mongoose = require('mongoose');

// Définition du schéma pour le modèle Audio
const audioSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  mimeType: { type: String, required: true },
  // Ajoutez d'autres champs si besoin
});

// Création du modèle Audio à partir du schéma
const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
