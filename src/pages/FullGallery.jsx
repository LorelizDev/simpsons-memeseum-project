import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import AudioPlayer from '../components/AudioPlayer';
import backgroundImage from '../assets/images/FullGallery.png';  // Importa la imagen de fondo

const FullGallery = () => {
  const [data, setData] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes();
      setData(memes);
    };

    loadMemes();
  }, []);

  const handleClick = (meme) => {
    if (selectedMeme && selectedMeme.id === meme.id) {
      setSelectedMeme(null);
      setShowLargeImage(false);
    } else {
      setSelectedMeme(meme);
      setShowLargeImage(true);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Aplica la imagen de fondo
        backgroundSize: 'cover',  // Ajusta la imagen para cubrir todo el contenedor
        backgroundPosition: 'center',  // Centra la imagen de fondo
      }}
    >
      {/* Reproductor de audio */}
      <AudioPlayer />

      {/* Mostrar todas las miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex flex-wrap space-x-2">
        {data.map((meme) => (
          <img
            key={meme.id}
            src={meme.image}
            alt={meme.name}
            className="w-32 h-32 object-cover cursor-pointer"
            onClick={() => handleClick(meme)}
          />
        ))}
      </div>

      {/* Mostrar imagen grande al hacer clic en una miniatura */}
      {showLargeImage && selectedMeme && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => handleClick(selectedMeme)}
        >
          <img
            src={selectedMeme.image}
            alt={selectedMeme.name}
            className="w-120 h-120 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default FullGallery;
