
import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simula la carga, después de un tiempo
    const timer = setTimeout(() => {
      setIsOpen(true);
    },100 ); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isOpen ? 'open' : ''}`} id="preloader">
      <div className="door">
        <div className="door-panel left"></div>
        <div className="door-panel right"></div>
      </div>
    </div>
  );
};

export default Preloader;








