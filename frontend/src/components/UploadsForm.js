// import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from 'react';

import axios from "axios";


function Formular() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');
  const [audioURL, setAudioURL] = useState('');

  const handleFileChange = event => {
    setAudioFile(event.target.files[0]);
  };

  const handleDownloadsClear=()=>{
    setTitle('');
    setArtist('');
    setAudioFile(null);
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('audioFile', audioFile);

    try {
      await axios.post('http://localhost:3000/api/songs/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Fichier audio téléchargé avec succès');
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier audio', error);
    }
    handleDownloadsClear();
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/songs/audio?title=${searchTitle}`);
      setAudioURL(URL.createObjectURL(response.data));
    } catch (error) {
      console.error('Erreur lors de la récupération du fichier audio', error);
    }
  };

  return (
    <div>
      <h2>Télécharger un fichier audio:</h2>
      <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Artiste" value={artist} onChange={e => setArtist(e.target.value)} />
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Télécharger</Button>

      <h2>Récupérer un fichier audio:</h2>
      <input type="text" placeholder="Titre" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
      <Button onClick={handleSearch}>Rechercher</Button>

      {audioURL && <audio controls src={audioURL} />}
    </div>
  );
}

export default Formular;
