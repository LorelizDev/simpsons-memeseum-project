// src/components/Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onImageAdd }) => {
  const [imageData, setImageData] = useState({
    name: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setImageData({
      ...imageData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/memes', imageData); // Cambia la URL según tu backend
      onImageAdd(response.data); // Llama a la función de callback para agregar la imagen a la galería
      setImageData({ name: '', imageUrl: '' }); // Limpia el formulario
    } catch (error) {
      console.error('Error al agregar imagen:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre del Meme
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={imageData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
          URL de la Imagen
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageData.imageUrl}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Agregar Meme
      </button>
    </form>
  );
};

export default Form;
