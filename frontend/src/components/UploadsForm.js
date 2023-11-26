import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import axios from "axios";
import '../styles/Uploads.css'


function Formular() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const handleFileChange = event => {
    setAudioFile(event.target.files[0]);
  };

  const handleClearForm=()=>{
    setTitle('');
    setArtist('');
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
    handleClearForm();
  };

  return (
      <Box sx={{
        border:'1px solid #e6ebf1',
        borderRadius:'10px',
        padding:'2%'
      }} >
        <h2>Télécharger un fichier audio:</h2>
        Title:<br/>
        <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} /><br/>
        Artist:<br/>
        <input type="text" placeholder="Artiste" value={artist} onChange={e => setArtist(e.target.value)} /><br/>
        File path:<br/>
        <input type="file" onChange={handleFileChange} /><br/>
        <Button variant="contained" sx={{marginTop:'3%'}} onClick={handleUpload}>Télécharger</Button>
      </Box>
  );
}

export default Formular;
