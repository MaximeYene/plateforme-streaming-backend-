import React, { useState } from 'react';
import axios from 'axios';

const DownloadForm = () => {
  const [songTitle, setSongTitle] = useState('');
  const [downloadedSong, setDownloadedSong] = useState(null);
  const [error, setError] = useState(null);

//   const clearForm=()=>{
//     setSongTitle('');
//   }

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/songs/download?title=${songTitle}`, {
        responseType: 'blob'
      });

      // Créer un objet URL à partir du fichier audio téléchargé
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Créer un lien pour télécharger le fichier audio
      setDownloadedSong(url);
    } catch (error) {
      setError('Une erreur s\'est produite lors du téléchargement de la chanson.');
    }
    // clearForm();
  };

  return (
    <div>
      <input 
        type="text" 
        value={songTitle} 
        onChange={(e) => setSongTitle(e.target.value)} 
        placeholder="Titre de la chanson" 
      />
      <button onClick={handleDownload}>Télécharger la chanson</button>
      {downloadedSong && (
        <a href={downloadedSong} download={`${songTitle}.mp3`}>
          Télécharger {songTitle}
        </a>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default DownloadForm;
