
import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro11111SF.png';
import initialImage2 from '../assets/images/cuadro2SF.png';
import initialImage3 from '../assets/images/cuadro3333SF.png';
import initialImage4 from '../assets/images/cuadro4SF.png';
import initialImage5 from '../assets/images/cuadro55SF.png';
import initialImage6 from '../assets/images/cuadro66SF.png';
import initialImage7 from '../assets/images/cuadro77SF.png';
import initialImage8 from '../assets/images/cuadro888SF.png';
import S1 from '../assets/images/S1.png';

import MemeView from '../components/MemeView';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Array de imágenes iniciales con posiciones y tamaños
  const initialImages = [
    { id: '1', src: initialImage1, top: '31%', left: '0%', width: '96px', height: '280px' },
    { id: '2', src: initialImage2, top: '45%', left: '34%', width: '72px', height: '90px' },
    { id: '3', src: initialImage3, top: '44%', left: '67.5%', width: '80px', height: '100px' },
    { id: '4', src: initialImage4, top: '48%', left: '61.5%', width: '55px', height: '55px' },
    { id: '5', src: initialImage5, top: '42%', left: '21%', width: '100px', height: '130px' },
    { id: '6', src: initialImage6, top: '35%', left: '12.5%', width: '50px', height: '224px' },
    { id: '7', src: initialImage7, top: '40.9%', left: '75%', width: '100px', height: '150px' },
    { id: '8', src: initialImage8, top: '25%', left: '82%', width: '130px', height: '320px' },
  ];

  // Obtener datos de db.json cuando el componente se monta
  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes();
      setData(memes);
    };

    loadMemes();
  }, []);

  // Manejar el click para mostrar la imagen grande
  const handleClick = (index) => {
    setSelectedIndex(index);
    setShowLargeImage(true);
  };

  // Mover a la siguiente imagen
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  // Mover a la imagen anterior
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + initialImages.length) % initialImages.length);
  };

  // Cerrar la imagen grande
  const handleClose = () => {
    setShowLargeImage(false);
    setSelectedIndex(null);
  };

  const currentImage = initialImages[selectedIndex];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Imagen Principal */}
      <div className="relative flex justify-center items-center">
        <img
          src={S1}
          alt="Imagen Principal"
          className="w-[1200px] h-[600px] object-cover"
        />

        {/* Miniaturas encima de la imagen principal */}
        {initialImages.map((initialImage) => (
          <img
            key={initialImage.id}
            src={initialImage.src}
            alt={`Cuadro Inicial ${initialImage.id}`}
            className="absolute object-cover cursor-pointer transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105"
            style={{
              top: initialImage.top,
              left: initialImage.left,
              width: initialImage.width,
              height: initialImage.height,
            }}
            onClick={() => handleClick(initialImage.id - 1)}
          />
        ))}
      </div>

      {/* Renderizar el componente MemeView si se muestra la imagen grande */}
      {showLargeImage && (
        <MemeView
          currentImage={currentImage}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;


    
    
    
    
    
    
    






