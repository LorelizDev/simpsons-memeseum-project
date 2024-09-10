import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MemeView = ({ currentImage, handleClose, handleNext, handlePrev }) => {
  if (!currentImage) return null;


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
        <div className="relative">
          <img
            src={currentImage.src}
            alt={`Imagen Grande ${currentImage.id}`}
            className="w-120 h-120 object-cover cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Iconos de papelera y lápiz */}
          <div className="absolute top-4 right-4 flex space-x-4 z-30">
            <button
              className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>

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


















