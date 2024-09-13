// src/components/MemeView.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const MemeView = ({
  currentImage,
  handleClose,
  handleNext,
  handlePrev,
  handleDelete,
}) => {
  if (!currentImage) return null; // Si no hay una imagen seleccionada, no muestra nada

  return (
    <>
      {/* Fondo oscuro y borroso cuando se muestra la imagen grande */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
        onClick={handleClose} // Cierra la imagen grande al hacer clic en el fondo oscuro
      ></div>

      {/* Contenedor de la imagen grande */}
      <div
        className="fixed inset-0 flex items-center justify-center z-20"
        onClick={handleClose} // Cierra la imagen grande al hacer clic fuera de la imagen
      >
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()} // Evita cerrar la imagen grande al hacer clic dentro de este contenedor
        >
          {/* Imagen grande seleccionada */}
          <img
            src={currentImage.image} // Asegúrate de que esta propiedad tenga la URL correcta
            alt={currentImage.name}
            className="w-[500px] h-[500px] object-cover cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Detiene la propagación del evento para no cerrar al hacer clic en la imagen
          />

          {/* Botón de flecha izquierda para navegar al meme anterior */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }} // Detener propagación y navegar al meme anterior
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {/* Botón de flecha derecha para navegar al siguiente meme */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }} // Detener propagación y navegar al siguiente meme
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          {/* Botón de eliminación para eliminar el meme actual */}
          <button
            className="absolute top-4 right-4 z-30 text-white bg-red-600 bg-opacity-80 p-2 rounded-full hover:bg-red-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }} // Detener propagación y eliminar el meme actual
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MemeView;
