import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import axios from "axios";

const RecoverFormular=()=>{
    const [searchTitle, setSearchTitle] = useState('');
    const [audioURL, setAudioURL] = useState('');
    const [audioTitle, setAudioTitle]=useState('');
    const [audioArtist, setAudioArtist]=useState('');




    const handleClearForm=()=>{
      setSearchTitle('');
    }

    const handleSearch = async () => {

      const formData = new FormData();
    formData.append('audioTitle', audioTitle);
    formData.append('audioArtist', audioArtist);
    formData.append('audioURL', audioURL);
      //Ici on effectue la recherche
        try {
          const response = await axios.get(`http://localhost:3000/api/songs/audio?title=${searchTitle}`);
          const audioBlob = new Blob([response.data]);
          setAudioURL(URL.createObjectURL(audioBlob));
          setAudioTitle(response.data.title);
          setAudioArtist(response.data.artist);
        } catch (error) {
          console.error('Erreur lors de la récupération du fichier audio', error);
        }

        //Enregistrement de la recherhce dans la base de donnees
        try{
          await axios.post(`http://localhost:3000/api/saveSearch`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Recherche sauvegardée avec succès');
        } catch (error) {
          console.error('Erreur lors de la auvagerde de recherche du fichier audio', error);
        }
        handleClearForm();
      };
    
    
    return(
        <Box sx={{
          border:'1px solid #e6ebf1',
          borderRadius:'10px',
          padding:'2%'
        }} >
        <h2>Rechercher un fichier audio:</h2>
        <input type="text" placeholder="Titre" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
        <Button sx={{marginTop:'5%'}} variant="contained" onClick={handleSearch}>Rechercher</Button>
        {audioURL && (
        <div>
          <h3>{audioTitle}-{audioArtist}</h3>
          <audio controls src={audioURL} />
        </div>
      )}


      </Box>
    )
}

export default RecoverFormular;