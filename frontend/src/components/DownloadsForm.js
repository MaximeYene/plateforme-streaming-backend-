import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import axios from "axios";

const DownloadsFormular=()=>{
    const [searchTitle, setSearchTitle] = useState('');
    const [audioURL, setAudioURL] = useState('');

    const handleClearForm=()=>{
      setSearchTitle('');
    }

    const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/songs/audio?title=${searchTitle}`);
          const audioBlob = new Blob([response.data]);
          setAudioURL(URL.createObjectURL(audioBlob));
        } catch (error) {
          console.error('Erreur lors de la récupération du fichier audio', error);
        }
        handleClearForm();
      };
    
    
    return(
        <Box sx={{
          border:'1px solid #e6ebf1',
          borderRadius:'10px',
          padding:'2%'
        }} >
        <h2>Récupérer un fichier audio:</h2>
        <input type="text" placeholder="Titre" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
        <Button sx={{marginTop:'5%'}} variant="contained" onClick={handleSearch}>Rechercher</Button>
        {audioURL && <audio controls src={audioURL} />}

      </Box>
    )
}

export default DownloadsFormular;