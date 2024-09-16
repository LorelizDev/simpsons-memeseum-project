import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './ButtonIcon';

const MemeView = ({ currentImage, handleClose, handleNext, handlePrev, handleDelete, handleEdit, showIcons=true }) => {
  if (!currentImage) return null;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentImage) {
      setIsVisible(true);
    }
  }, [currentImage]);


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

          {/* Condicional para mostrar o no los íconos de papelera y lápiz */}
          {/* Si no se quiere mostrar los iconos se le da el valor false a showIcons por props (showIcons=False) */}
          {showIcons && (
            <div className="absolute top-4 right-4 flex space-x-2 z-30">
              <ButtonIcon 
                icon={faTrash}
                onClick={(e) => {e.stopPropagation(); handleDelete(currentImage.id);}}
                className={'text-[#f4082c]'}
              />
              <ButtonIcon 
                icon={faEdit}
                onClick={(e) => {e.stopPropagation();handleEdit(currentImage.id)}}
                className={'text-white'}
              />
            </div>
          )}

          {/* Flechas de navegación */}
          <ButtonIcon 
            icon={faArrowLeft}
            onClick={handlePrev}
            className={'absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white'}
          />
          <ButtonIcon 
            icon={faArrowRight}
            onClick={handleNext}
            className={'absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white'}
          />
        </div>
      </div>
    </>
  );
};

export default MemeView;






















