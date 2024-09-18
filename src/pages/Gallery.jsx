import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro1p.png';
import initialImage2 from '../assets/images/cuadro2p.png';
import initialImage4 from '../assets/images/cuadro4p.png';
import initialImage6 from '../assets/images/cuadro6p.png';
import initialImage7 from '../assets/images/cuadro7p.png';
import initialImage8 from '../assets/images/cuadro8p.png';
import initialImage9 from '../assets/images/enter1111.png';
import meme1 from '../assets/images/meme1.png';
import meme2 from '../assets/images/meme2.png';
import meme4 from '../assets/images/meme4.png';
import meme6 from '../assets/images/meme6.png';
import meme7 from '../assets/images/meme7.png';
import meme8 from '../assets/images/meme8.png';
import S5 from '../assets/images/S5.jpg';

import MemeView from '../components/MemeView';
import AudioPlayer from '../components/AudioPlayer';
import audioFile from '../assets/sounds/SimpsonsIntro_1.mp3';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  const initialImages = [
    { id: '1', image: initialImage1, top: '27%', left: '0%', width: '25%', height: '45%' },
    { id: '2', image: initialImage2, top: '42%', left: '35%', width: '8%', height: '17%' },
    { id: '4', image: initialImage4, top: '42%', left: '61.5%', width: '8%', height: '17%' },
    { id: '6', image: initialImage6, top: '30%', left: '20%', width: '15%', height: '40%' },
    { id: '7', image: initialImage7, top: '27%', left: '74%', width: '25%', height: '45%' },
    { id: '8', image: initialImage8, top: '30%', left: '67%', width: '15%', height: '40%' },
    { id: '9', image: initialImage9, top: '47%', left: '50.2%', width: '4.1%', height: '12%' },
  ];

  const mainMemes = [meme1, meme2, meme4, meme6, meme7, meme8];

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

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + initialImages.length) % initialImages.length);
  };

  const handleClose = () => {
    setShowLargeImage(false);
    setSelectedIndex(null);
  };

  const currentMeme = selectedIndex !== null ? mainMemes[selectedIndex] : null;

  return (
    <div className="relative flex flex-col items-center justify-center max-sm:h-full">
      <AudioPlayer src={audioFile} />

      {/* Imagen Principal */}
      <div className="relative flex justify-center items-center border-white border-2 rounded-lg w-full h-full">
        <img
          src={S5}
          alt="Imagen Principal"
          className="w-full h-full container"
        />

        {/* Cuadros */}
        {initialImages.map((initialImage, index) => (
          initialImage.id === '9' ? (
            <Link
              key={initialImage.id}
              to="/full-gallery"
              className={`absolute initial-image-${initialImage.id}`}
            >
              <img
                src={initialImage.image}
                alt={`Cuadro Inicial ${initialImage.id}`}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-300 max-lg:scale-[200%] hover:scale-400"
              />
            </Link>
          ) : (
            <img
              key={initialImage.id}
              src={initialImage.image}
              alt={`Cuadro Inicial ${initialImage.id}`}
              className={`absolute object-contain cursor-pointer transition-transform duration-300 initial-image-${initialImage.id} hover:brightness-110 hover:scale-105`}
              onClick={() => handleClick(index)}
            />
          )
        ))}
      </div>

      {showLargeImage && currentMeme && (
        <MemeView
          currentImage={{ image: currentMeme }}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrev={handlePrev}
          showIcons={false}
        />
      )}
    </div>
  );
};

export default Gallery;
