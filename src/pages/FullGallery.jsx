import React, { useState, useEffect } from 'react';
import { getMemes, deleteMeme } from '../services/services'; // Importa funciones para obtener y eliminar memes
import AudioPlayer from '../components/AudioPlayer'; // Importa el componente del reproductor de audio
import backgroundImage from '../assets/images/FullGallery.png'; // Importa la imagen de fondo


const FullGallery = () => {
  const [data, setData] = useState([]); // Estado para almacenar los memes
  const [selectedMeme, setSelectedMeme] = useState(null); // Estado para almacenar el meme actualmente seleccionado
  const [showLargeImage, setShowLargeImage] = useState(false); // Estado para controlar la visibilidad de la imagen grande


  useEffect(() => {
    const loadMemes = async () => {
      const memes = await getMemes(); // Llama a la función getMemes para obtener los memes
      setData(memes); // Actualiza el estado con los memes obtenidos
    };

    loadMemes(); // Llama a la función para cargar los memes al montar el componente
  }, []);


  const handleClick = (meme) => {
    setSelectedMeme(meme); // Establece el meme seleccionado
    setShowLargeImage(true); // Muestra la imagen grande
  };


  const handleClose = () => {
    setSelectedMeme(null); // Limpia el meme seleccionado
    setShowLargeImage(false); // Oculta la imagen grande
  };


  const handleDelete = async (memeId) => {
    try {
      await deleteMeme(memeId); // Llama a la función deleteMeme para eliminar el meme
      setData(data.filter((meme) => meme.id !== memeId)); // Actualiza el estado eliminando el meme de la lista
      handleClose(); // Cierra la vista de imagen grande después de eliminar
    } catch (error) {
      console.error('Error al eliminar el meme:', error);
      alert('Hubo un error al eliminar el meme. Inténtalo de nuevo.'); // Muestra un mensaje de error si la eliminación falla
    }
  };


  const handleNext = () => {
    if (selectedMeme) {
      const currentIndex = data.findIndex((meme) => meme.id === selectedMeme.id); // Encuentra el índice del meme actual
      const nextIndex = (currentIndex + 1) % data.length; // Calcula el índice del siguiente meme
      setSelectedMeme(data[nextIndex]); // Actualiza el estado con el siguiente meme
    }
  };

  const handlePrevious = () => {
    if (selectedMeme) {
      const currentIndex = data.findIndex((meme) => meme.id === selectedMeme.id); // Encuentra el índice del meme actual
      const prevIndex = (currentIndex - 1 + data.length) % data.length; // Calcula el índice del meme anterior
      setSelectedMeme(data[prevIndex]); // Actualiza el estado con el meme anterior
    }
  };


  return (
    <div
      className="relative flex flex-col items-center justify-center h-[135vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Aplica la imagen de fondo
        backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el contenedor
        backgroundPosition: 'left center', // Mueve la imagen hacia la izquierda
      }}
    >
      {/* Reproductor de audio */}
      <AudioPlayer />

      {/* Mostrar todas las miniaturas de los memes */}
      <div className="absolute left-4 top-4 flex flex-wrap space-x-2">
        {data.map((meme) => (
          <img
            key={meme.id}
            src={meme.image}
            alt={meme.name}
            className="w-32 h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110" // Agrega efecto de hover
            onClick={() => handleClick(meme)}
          />
        ))}
      </div>

      {/* Mostrar imagen grande con overlay al hacer clic en una miniatura */}
      {showLargeImage && selectedMeme && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10" // Overlay oscuro
          onClick={handleClose} // Cierra la vista al hacer clic en el overlay
        >
          <div className="relative">
            {/* Imagen grande seleccionada */}
            <img
              src={selectedMeme.image}
              alt={selectedMeme.name}
              className="w-120 h-120 object-cover"
              onClick={(e) => e.stopPropagation()} // Detiene la propagación del evento para no cerrar al hacer clic en la imagen
            />

            {/* Botón de flecha izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }} // Detener propagación y navegar
              className="absolute left-0 ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              &#9664; {/* Carácter Unicode para la flecha izquierda */}
            </button>

            {/* Botón de flecha derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }} // Detener propagación y navegar
              className="absolute right-0 mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              &#9654; {/* Carácter Unicode para la flecha derecha */}
            </button>

            {/* Botón de eliminación */}
            <button
              onClick={(e) => { e.stopPropagation(); handleDelete(selectedMeme.id); }} // Detener propagación y eliminar
              className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
            >
              🗑️ {/* Carácter Unicode para la papelera */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullGallery;

