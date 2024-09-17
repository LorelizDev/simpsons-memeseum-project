import React, { useState, useEffect } from 'react';
import ButtonAddMeme from './ButtonAddMeme';
import ButtonImage from './ButtonImage';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center mb-12 px-3 max-xs:h-28 max-xs:mb-6 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-transparent h-28 max-xs:h-24 max-xs:px-0' : 'h-36 bg-[url("src/assets/images/simpson_sky_background-removebg.png")]'
      } sticky top-0 z-50`}
    >
      <div className='h-5/6 max-xs:h-5/6'>
        <ButtonImage 
          url_a='/'
          url_img='src/assets/images/logo-simpson-removebg.png'
          alt_img="Logo Simpson's Memesuem"
        />
      </div>
      <div>
        <h1 className={`font-simpson-title text-center text-5xl md:text-6xl max-xs:hidden text-yellow-simp drop-shadow-simpson-title-ds ${scrolled ? 'hidden' : ''}`}>Simpson's Memeseum</h1>
      </div>
      <div className={`h-5/6 pt-3 max-xs:w-24 max-xs:-mt-4 ${scrolled ? '-mt-4 xs:w-28' : 'xs:w-36'}`}>
        <ButtonAddMeme />
      </div>
    </nav>
  );
};

export default Navbar;

