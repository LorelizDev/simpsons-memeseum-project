
import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro11.png';
import initialImage2 from '../assets/images/cuadro2.png';
import initialImage3 from '../assets/images/cuadro3.png';
import initialImage4 from '../assets/images/cuadro44.png';
import initialImage5 from '../assets/images/cuadro5.png';
import initialImage6 from '../assets/images/cuadro6.png';
import initialImage7 from '../assets/images/cuadro7.png';
import initialImage8 from '../assets/images/cuadro88.png';
import S1 from '../assets/images/S1.png';

import MemeView from '../components/MemeView';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Array de imágenes iniciales con posiciones y tamaños
  const initialImages = [
    { id: '1', src: initialImage1, top: '25%', left: '-5%', width: '200px', height: '420px' },
    { id: '2', src: initialImage2, top: '37%', left: '33%', width: '150px', height: '230px' },
    { id: '3', src: initialImage3, top: '40%', left: '59%', width: '140px', height: '170px' },
    { id: '4', src: initialImage4, top: '23%', left: '62%', width: '200px', height: '400px' },
    { id: '5', src: initialImage5, top: '40%', left: '21%', width: '130px', height: '200px' },
    { id: '6', src: initialImage6, top: '27%', left: '12%', width: '100px', height: '350px' },
    { id: '7', src: initialImage7, top: '42%', left: '76%', width: '200px', height: '180px' },
    { id: '8', src: initialImage8, top: '14%', left: '85%', width: '180px', height: '520px' },
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
    e.stopPropagation(); // Evita cerrar la imagen grande al hacer clic en las flechas
    setSelectedIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  // Mover a la imagen anterior
  const handlePrev = (e) => {
    e.stopPropagation(); // Evita cerrar la imagen grande al hacer clic en las flechas
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
            onClick={() => handleClick(initialImage.id - 1)} // Ajusta el índice según sea necesario
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


    
    
    
    
    
    
    






