import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro1.png';
import initialImage2 from '../assets/images/cuadro2.png';
import initialImage3 from '../assets/images/cuadro3.png';
import initialImage4 from '../assets/images/cuadro4.png';
import initialImage5 from '../assets/images/cuadro5.png';
import initialImage6 from '../assets/images/cuadro6.png';
import initialImage7 from '../assets/images/cuadro7.png';
import initialImage8 from '../assets/images/cuadro8.png';
import meme1 from '../assets/images/meme1.png';
import meme2 from '../assets/images/meme2.png';
import meme3 from '../assets/images/meme3.png';
import meme4 from '../assets/images/meme4.png';
import meme5 from '../assets/images/meme5.png';
import meme6 from '../assets/images/meme6.png';
import meme7 from '../assets/images/meme7.png';
import meme8 from '../assets/images/meme8.png';
import S1 from '../assets/images/S1.png';

import MemeView from '../components/MemeView';
import AudioPlayer from '../components/AudioPlayer';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Definimos las imágenes iniciales
  const initialImages = [
    { id: '1', src: initialImage1, top: '31%', left: '0%', width: '15%', height: '45%' },
    { id: '2', src: initialImage2, top: '45%', left: '34%', width: '10%', height: '17%' },
    { id: '3', src: initialImage3, top: '44%', left: '67.5%', width: '12%', height: '16%' },
    { id: '4', src: initialImage4, top: '48%', left: '61.5%', width: '7%', height: '9%' },
    { id: '5', src: initialImage5, top: '41%', left: '22%', width: '14%', height: '23%' },
    { id: '6', src: initialImage6, top: '34%', left: '12%', width: '8%', height: '40%' },
    { id: '7', src: initialImage7, top: '40.9%', left: '75%', width: '14%', height: '25%' },
    { id: '8', src: initialImage8, top: '25%', left: '82%', width: '18%', height: '53%' },
  ];

  // Definimos los memes correspondientes
  const mainMemes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8];

  useEffect(() => {
    const loadMemes = async () => {
      const memesData = await getMemes();
      setData(memesData);
    };

    loadMemes();
  }, []);

  // Al hacer clic, muestra el meme correspondiente
  const handleClick = (index) => {
    setSelectedIndex(index);
    setShowLargeImage(true);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + initialImages.length) % initialImages.length);
  };

  const handleClose = () => {
    setShowLargeImage(false);
    setSelectedIndex(null);
  };

  // Selecciona el meme actual basado en el índice seleccionado
  const currentMeme = selectedIndex !== null ? mainMemes[selectedIndex] : null;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <AudioPlayer />

      {/* Imagen Principal */}
      <div className="relative flex justify-center items-center border border-white border-2 rounded-lg">
        <img
          src={S1}
          alt="Imagen Principal"
          className="w-[1200px] h-[600px] object-cover"
        />

        {/* Miniaturas encima de la imagen principal */}
        {initialImages.map((initialImage, index) => (
          <img
            key={initialImage.id}
            src={initialImage.src}
            alt={`Cuadro Inicial ${initialImage.id}`}
            className="absolute object-cover cursor-pointer transition-transform duration-300 hover:brightness-110 hover:scale-105"
            style={{
              top: initialImage.top,
              left: initialImage.left,
              width: initialImage.width,
              height: initialImage.height,
            }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {/* Renderizar el componente MemeView si se muestra la imagen grande */}
      {showLargeImage && currentMeme && (
        <MemeView
          currentImage={{ src: currentMeme }} // Pasa el meme como la imagen actual
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;




    
    
    
    
    
    
    






