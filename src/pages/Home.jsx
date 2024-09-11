// Home.jsx
import React, { useState } from 'react';
import ButtonImage from '../components/ButtonImage';
import Preloader from '../components/Preloader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    // Simula un delay para mostrar el preloader
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/main-gallery';
    }, 2000);
  };

  return (
    <div className='relative flex justify-center mx-10 h-[calc(100vh-9rem-5rem-5rem)]'>
      <img src="src/assets/images/front-museum.jpg" alt="Fachada de Simpson's Memeseum" className='max-h-full border-none rounded-3xl' />
      <div className='absolute h-1/5 bottom-[32%] active:scale-90 active:hue-rotate-30'>
        <ButtonImage 
          url_a='#' // Evita la redirección instantánea
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




