import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro1p.png';
import initialImage2 from '../assets/images/cuadro2p.png';
// import initialImage3 from '../assets/images/cuadro3p.png';
import initialImage4 from '../assets/images/cuadro4p.png';
// import initialImage5 from '../assets/images/cuadro5.png';
import initialImage6 from '../assets/images/cuadro6p.png';
import initialImage7 from '../assets/images/cuadro7p.png';
import initialImage8 from '../assets/images/cuadro8p.png';
import initialImage9 from '../assets/images/enter1111.png';
import meme1 from '../assets/images/meme1.png';
import meme2 from '../assets/images/meme2.png';
import meme3 from '../assets/images/meme3.png';
import meme4 from '../assets/images/meme4.png';
import meme5 from '../assets/images/meme5.png';
import meme6 from '../assets/images/meme6.png';
import meme7 from '../assets/images/meme7.png';
import meme8 from '../assets/images/meme8.png';
import S5 from '../assets/images/S5.jpg';

import MemeView from '../components/MemeView';
import AudioPlayer from '../components/AudioPlayer';
import audioFile from '../assets/sounds/Simpsonsintro_1.mp3';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  const initialImages = [
    { id: '1', src: initialImage1, top: '27%', left: '0%', width: '25%', height: '45%' },
    { id: '2', src: initialImage2, top: '42%', left: '35%', width: '8%', height: '17%' },
    // { id: '3', src: initialImage3, top: '27%', left: '72%', width: '14%', height: '25%' },
    { id: '4', src: initialImage4, top: '42%', left: '61.5%', width: '8%', height: '17%' },
    // { id: '5', src: initialImage5, top: '50%', left: '80%', width: '10%', height: '20%' },
    { id: '6', src: initialImage6, top: '30%', left: '20%', width: '15%', height: '40%' },
    { id: '7', src: initialImage7, top: '27%', left: '74%', width: '25%', height: '45%' },
    { id: '8', src: initialImage8, top: '30%', left: '67%', width: '15%', height: '40%' },
    { id: '9', src: initialImage9, top: '49%', left: '50.2%', width: '4.1%', height: '12%' },
  ];

  const mainMemes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8];

  useEffect(() => {
    const loadMemes = async () => {
      const memesData = await getMemes();
      setData(memesData);
    };

    loadMemes();
  }, []);

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

  const currentMeme = selectedIndex !== null ? mainMemes[selectedIndex] : null;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <AudioPlayer src={audioFile} />

      {/* Imagen Principal */}
      <div className="relative flex justify-center items-center border-white border-2 rounded-lg w-full h-full">
        <img
          src={S5}
          alt="Imagen Principal"
          className="w-full h-full object-cover"
        />

        {/* Miniaturas encima de la imagen principal */}
        {initialImages.map((initialImage, index) => (
          <img
            key={initialImage.id}
            src={initialImage.src}
           alt={`Cuadro Inicial ${initialImage.id}`}
    className={`absolute object-contain cursor-pointer transition-transform duration-300 2xl:block hidden ${
      initialImage.id === '9' ? 'hover:scale-400' : 'hover:brightness-110 hover:scale-105'
    }`}
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

      {showLargeImage && currentMeme && (
        <MemeView
          currentImage={{ src: currentMeme }}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;






    
    
    
    
    
    
    






