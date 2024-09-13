
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonImage from '../components/ButtonImage';
import Preloader from '../components/Preloader';
import AudioPlayer from '../components/AudioPlayer';
import audioFile from '../assets/sounds/marge1.mp3';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsLoading(true);

    // Simula un delay para mostrar el preloader
    setTimeout(() => {
      navigate('/main-gallery');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='relative flex justify-center'>
      <AudioPlayer src={audioFile} />
      <img src="src/assets/images/front-museum.jpg" alt="Fachada de Simpson's Memeseum" className='max-h-full border-none rounded-3xl' />
      <div className='absolute h-1/5 bottom-[32%] active:scale-90 active:hue-rotate-30'>
        <ButtonImage 
          url_image="src/assets/images/buttton-enter.png"
          alt_img="Botón para entrar a la galería"
          onClick={handleButtonClick}
        />
      </div>
      {isLoading && <Preloader />}
    </div>
  );
};

export default Home;





