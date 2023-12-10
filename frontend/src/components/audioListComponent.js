import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const AudioListComponent=()=>{
   const [audios, setAudios]=useState('');
   
   useEffect(() => {
    const fetchAudios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/songs/randomAudio'); // Remplacez l'URL par l'URL de votre serveur backend
        setAudios(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des audios', error);
      }
    };

    fetchAudios();
  }, []);

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div>
    <h1>Liste d'audios aléatoires</h1>
    <ul>
      {Array.isArray(audios) && audios.length > 0 ? (
        audios.map((audio, index) => (
          <li key={index}  >
            <h3>{audio.title}-{audio.artist}</h3>
            <h4>{audio.album}</h4>
            <audio controls src={audio.audioURL} onClick={() => playAudio(audio.url)} />
          </li>
        ))
      ) : (
        <li>Aucun audio trouvé</li>
      )}
    </ul>
  </div>

  );

}

export default AudioListComponent;