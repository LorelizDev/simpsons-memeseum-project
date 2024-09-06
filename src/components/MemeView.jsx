// MemeView.js
import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage from '../assets/images/bart.png';
import AudioPlayer from './AudioPlayer';

// Función para seleccionar el meme por id
const selectMemeById = (memes, id) => memes.find((item) => item.id === id);

const MemeView = () => {
  const [data, setData] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Obtener datos de db.json cuando el componente se monta
  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes();
      setData(memes);
    };

    loadMemes();
  }, []);

  // Manejar el click para mostrar/ocultar la imagen grande
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
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Reproductor de música */}
      <AudioPlayer />

      {/* Mostrar miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex space-x-2">
        <img
          src={initialImage}
          alt="Cuadro Inicial"
          className="w-48 h-48 object-cover cursor-pointer"
          onClick={() => handleClick(selectMemeById(data, '1'))}
        />
        {data.slice(1, 8).map((meme) => (
          <img
            key={meme.id}
            src={meme.thumbnail}
            alt={meme.name}
            className="w-24 h-24 object-cover cursor-pointer"
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

export default MemeView;










