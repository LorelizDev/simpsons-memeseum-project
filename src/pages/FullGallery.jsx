import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';  
import AudioPlayer from '../components/AudioPlayer';  

const FullGallery = () => {
  const [data, setData] = useState([]);  // Estado para almacenar los memes/imágenes
  const [selectedMeme, setSelectedMeme] = useState(null);  // Estado para la imagen seleccionada
  const [showLargeImage, setShowLargeImage] = useState(false);  // Controla si mostrar la imagen grande

  // Obtener datos de la API cuando el componente se monta
  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes();  // Llamada a la función del servicio para obtener los memes
      setData(memes);  // Guardar los memes en el estado
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
      {/* Reproductor de audio */}
      <AudioPlayer />

      {/* Mostrar todas las miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex flex-wrap space-x-2">
        {data.map((meme) => (
          <img
            key={meme.id}
            src={meme.image}  // Mostrar la imagen desde la API
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
            src={selectedMeme.image}  // Mostrar la imagen grande desde la API
            alt={selectedMeme.name}
            className="w-120 h-120 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default FullGallery;
