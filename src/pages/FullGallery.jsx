// src/pages/FullGallery.jsx
import React, { useState, useEffect } from 'react';
import { getMemes, deleteMeme } from '../services/services';
import AudioPlayer from '../components/AudioPlayer';
import backgroundImage from '../assets/images/FullGallery.png';
import MemeViewFull from "../components/MemeViewFull"

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
    setSelectedMeme(meme);
    setShowLargeImage(true);
  };

  const handleClose = () => {
    setSelectedMeme(null);
    setShowLargeImage(false);
  };

  const handleDelete = async (memeId) => {
    try {
      await deleteMeme(memeId);
      setData(data.filter((meme) => meme.id !== memeId));
      handleClose();
    } catch (error) {
      console.error('Error al eliminar el meme:', error);
      alert('Hubo un error al eliminar el meme. Inténtalo de nuevo.');
    }
  };

  const handleNext = () => {
    if (selectedMeme) {
      const currentIndex = data.findIndex((meme) => meme.id === selectedMeme.id);
      const nextIndex = (currentIndex + 1) % data.length;
      setSelectedMeme(data[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (selectedMeme) {
      const currentIndex = data.findIndex((meme) => meme.id === selectedMeme.id);
      const prevIndex = (currentIndex - 1 + data.length) % data.length;
      setSelectedMeme(data[prevIndex]);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-[135vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Aplica la imagen de fondo
        backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el contenedor
        backgroundPosition: 'left center', // Mueve la imagen hacia la izquierda
      }}
    >
      {/* Reproductor de audio */}
      <AudioPlayer />

      {/* Mostrar todas las miniaturas de los memes en un cuadro */}
      <div className="absolute left-4 top-4 flex flex-wrap space-x-4">
        {data.map((meme) => (
          <div
            key={meme.id}
            className="border-4 border-blue-500 shadow-xl p-6 m-6 rounded-lg bg-yellow-200 flex flex-col items-center" // Cambios en el color y tamaño del cuadro
            style={{ width: '150px', height: '175px' }} // Personaliza el tamaño del cuadro
          >
            <img
              src={meme.image}
              alt={meme.name}
              className="w-full h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleClick(meme)}
            />
            <h3 className="text-center mt-2 text-sm font-bold">{meme.name}</h3> {/* Nombre del meme */}
          </div>
        ))}
      </div>

      {/* Mostrar MemeView con imagen grande, navegación y eliminación */}
      {showLargeImage && selectedMeme && (
        <MemeViewFull
          currentImage={selectedMeme}  // <-- Asegúrate de que currentImage sea el meme seleccionado
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrev={handlePrevious}
          handleDelete={() => handleDelete(selectedMeme.id)}  // <-- Corregimos esta función
        />
      )}
    </div>
  );
};

export default FullGallery;
