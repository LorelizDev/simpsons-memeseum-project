import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro11.png';
import initialImage2 from '../assets/images/cuadro2.png';
import initialImage3 from '../assets/images/cuadro3.png';
import initialImage4 from '../assets/images/cuadro4.png';
import initialImage5 from '../assets/images/cuadro5.png';
import initialImage6 from '../assets/images/cuadro6.png';
import initialImage7 from '../assets/images/cuadro7.png';
import initialImage8 from '../assets/images/cuadro88.png';
import AudioPlayer from './AudioPlayer';

// Función para seleccionar el meme por id
const selectMemeById = (memes, id) => memes.find((item) => item.id === id);

const MemeView = () => {
  const [data, setData] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Array de imágenes iniciales
  const initialImages = [
    { id: '1', src: initialImage1 },
    { id: '2', src: initialImage2 },
    { id: '3', src: initialImage3 },
    { id: '4', src: initialImage4 },
    { id: '5', src: initialImage5 },
    { id: '6', src: initialImage6 },
    { id: '7', src: initialImage7 },
    { id: '8', src: initialImage8 },
  ];

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
      
      <AudioPlayer />

      {/* Mostrar miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex space-x-2">
        {/* Renderizar las imágenes iniciales */}
        {initialImages.map((initialImage) => (
          <img
            key={initialImage.id}
            src={initialImage.src}
            alt={`Cuadro Inicial ${initialImage.id}`}
            className="w-56 h-56 object-cover cursor-pointer transition-transform duration-300 hover:brightness-110"
            onClick={() => handleClick(selectMemeById(data, initialImage.id))}
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












