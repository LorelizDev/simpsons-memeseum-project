import React, { useState, useEffect } from 'react';
import { fetchMemes } from '../services/services';
import initialImage from '../assets/images/bart.png'; // Importa tu imagen inicial aquí

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
      // Selecciona el meme con id=1 para mostrar la imagen de Cloudinary
      const meme = selectMemeById(data, "1");
      if (meme) {
        setSelectedMeme(meme);  // Muestra la imagen de Cloudinary al hacer clic
        setShowLargeImage(true);
      } else {
        alert('Meme no encontrado.');
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {!showLargeImage && !selectedMeme ? (
        <div className="absolute left-4 top-4"> {/* Posiciona la imagen hacia la izquierda y arriba */}
          <img
            src={initialImage} // Cambia la URL de la imagen inicial
            alt="Meme Inicial"
            className="w-48 h-48 object-cover cursor-pointer"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div
          // Esto es por si la imagen está en un lado y quiero que se abra en el centro
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={handleClick}
        >
          <img
            src={selectedMeme?.image} // Muestra la imagen de Cloudinary
            alt={selectedMeme?.name}
            className="w-120 h-120 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MemeView;








