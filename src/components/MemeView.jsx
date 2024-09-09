import React, { useState, useEffect } from 'react';
import { getMemes } from '../services/services';
import initialImage1 from '../assets/images/cuadro11.png';
import initialImage2 from '../assets/images/cuadro2.png';
import initialImage3 from '../assets/images/cuadro3.png';
import initialImage4 from '../assets/images/cuadro4.png';
import initialImage5 from '../assets/images/cuadro5.png';
import initialImage6 from '../assets/images/cuadro6.png';
import initialImage7 from '../assets/images/cuadro7.png';
import initialImage8 from '../assets/images/cuadro88.png';
import AudioPlayer from './AudioPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Función para seleccionar el meme por id
const selectMemeById = (memes, id) => memes.find((item) => item.id === id);

const MemeView = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  // Array de imágenes iniciales
  const initialImages = [
    { id: '1', src: initialImage1 },
    { id: '2', src: initialImage2 },
    { id: '3', src: initialImage3 },
    { id: '4', src: initialImage4 },
    { id: '5', src: initialImage5 },
    { id: '6', src: initialImage6 },
    { id: '7', src: initialImage7 },
    { id: '8', src: initialImage8 },
  ];

  // Obtener datos de db.json cuando el componente se monta
  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes();
      setData(memes);
    };

    loadMemes();
  }, []);

  // Manejar el click para mostrar la imagen grande
  const handleClick = (index) => {
    setSelectedIndex(index);
    setShowLargeImage(true);
  };

  // Mover a la siguiente imagen
  const handleNext = (e) => {
    e.stopPropagation(); // Evita cerrar la imagen grande al hacer clic en las flechas
    setSelectedIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
  };

  // Mover a la imagen anterior
  const handlePrev = (e) => {
    e.stopPropagation(); // Evita cerrar la imagen grande al hacer clic en las flechas
    setSelectedIndex((prevIndex) => (prevIndex - 1 + initialImages.length) % initialImages.length);
  };

  // Cerrar la imagen grande
  const handleClose = () => {
    setShowLargeImage(false);
    setSelectedIndex(null);
  };

  const currentImage = initialImages[selectedIndex];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <AudioPlayer />

      {/* Fondo borroso cuando se muestra la imagen grande */}
      {showLargeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          onClick={handleClose} // Cerrar al hacer clic en el fondo
        ></div>
      )}

      {/* Mostrar miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex space-x-2">
        {/* Renderizar las imágenes iniciales */}
        {initialImages.map((initialImage, index) => (
          <div key={initialImage.id} className="relative group">
            <img
              src={initialImage.src}
              alt={`Cuadro Inicial ${initialImage.id}`}
              className="w-56 h-56 object-cover cursor-pointer transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" // Añadido scale-105 para agrandar
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Mostrar imagen grande al hacer clic en una miniatura */}
      {showLargeImage && currentImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20"
          onClick={handleClose} // Cerrar al hacer clic en cualquier parte del contenedor
        >
          <div className="relative">
            <img
              src={currentImage.src}
              alt={`Imagen Grande ${currentImage.id}`}
              className="w-120 h-120 object-cover cursor-pointer" // Cursor pointer para la imagen grande
              onClick={handleClose} // Cerrar al hacer clic en la imagen
            />

            {/* Iconos de papelera y lápiz */}
            <div className="absolute top-4 right-4 flex space-x-4 z-30">
              <button className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">
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
      )}
    </div>
  );
};

export default MemeView;














