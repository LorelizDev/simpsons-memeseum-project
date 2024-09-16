import React from 'react';
import { faTrash, faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './ButtonIcon';

const MemeView = ({ currentImage, handleClose, handleNext, handlePrev, handleDelete, handleEdit, showIcons=true }) => {
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
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenedor cierre el modal
        >
          <img
            src={currentImage.src}
            alt={`Imagen Grande ${currentImage.id}`}
            className="w-120 h-120 object-cover cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
          />

          {/* Condicional para mostrar o no los íconos de papelera y lápiz */}
          {showIcons && (
            <div className="absolute top-4 right-4 flex space-x-2 z-30">
              <ButtonIcon 
                icon={faTrash}
                onClick={(e) => {handleDelete(currentImage.id);}}
                className={'text-[#f4082c]'}
              />
              <ButtonIcon 
                icon={faEdit}
                onClick={(e) => {handleEdit(currentImage.id)}}
                className={'text-white'}
              />
            </div>
          )}

          {/* Flechas de navegación */}
          <ButtonIcon 
            icon={faArrowLeft}
            onClick={(e) => {e.stopPropagation(); handlePrev();}}
            className={'absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white'}
          />
          <ButtonIcon 
            icon={faArrowRight}
            onClick={(e) => {e.stopPropagation(); handleNext();}}
            className={'absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white'}
          />
        </div>
      </div>
    </>
  );
};

export default MemeView;



















