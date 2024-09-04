import React, { useState, useEffect } from 'react';
import { fetchMemes } from '../services/services';

// Función para seleccionar el meme con id=1
const selectMemeById = (memes, id) => memes.find((item) => item.id === id);

const MemeView = () => {
  const [data, setData] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Obtener datos de db.json cuando el componente se monta
  useEffect(() => {
    const loadMemes = async () => {
      const memes = await fetchMemes();
      setData(memes);
    };

    loadMemes();
  }, []);

  // Manejar el click para mostrar/ocultar la imagen grande
  const handleClick = () => {
    if (selectedMeme) {
      setSelectedMeme(null);
      setShowLargeImage(false);
    } else {
      const meme = selectMemeById(data, "1");
      if (meme) {
        setSelectedMeme(meme);
        setShowLargeImage(true);
      } else {
        alert('Meme no encontrado.');
      }
    }
  };

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      {!showLargeImage && !selectedMeme ? (
        <img
          src="https://res.cloudinary.com/dhbzr2e4h/image/upload/v1725369946/Meme1_gis7ul.jpg" // URL de la imagen inicial
          alt="Meme"
          className="w-48 h-48 object-cover cursor-pointer"
          onClick={handleClick}
        /> 
      ) : (
        <div
          // className="w-80 h-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={handleClick}
        >
          <img
            src={selectedMeme?.image}
            alt={selectedMeme?.name}
            className="w-120 h-120 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MemeView;






