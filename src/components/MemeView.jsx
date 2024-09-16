import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const MemeView = ({ currentImage, handleClose, handleNext, handlePrev, showTrash, showEdit }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentImage) {
      setIsVisible(true);
    }
  }, [currentImage]);

  if (!currentImage) return null;

  const handleAnimationEnd = () => {
    if (!currentImage) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {/* Fondo borroso cuando se muestra la imagen grande */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
        onClick={handleClose}
      ></div>

      {/* Mostrar imagen grande al hacer clic en una miniatura */}
      <div
        className="fixed inset-0 flex items-center justify-center z-20"
        onClick={handleClose}
      >
        <div
          className={`relative transition-transform transform duration-500 ease-in-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
          onAnimationEnd={handleAnimationEnd}
        >
          <img
            src={currentImage.src}
            alt={`Imagen Grande ${currentImage.id}`}
            className="w-120 h-120 object-cover cursor-pointer"
          />

          {/* Flechas de navegación */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MemeView;






















