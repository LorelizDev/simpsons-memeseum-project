import React, { useState, useEffect } from 'react';
import './MemeView.css';
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
    <div className="container">
      {!showLargeImage && !selectedMeme ? (
        <img
          src="https://res.cloudinary.com/dhbzr2e4h/image/upload/v1725369946/Meme1_gis7ul.jpg" // URL de la imagen inicial
          alt="Meme"
          className="meme-image"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <div className="meme-container" onClick={handleClick}>
          <img src={selectedMeme?.image} alt={selectedMeme?.name} />
        </div>
      )}
    </div>
  );
};

export default MemeView;






