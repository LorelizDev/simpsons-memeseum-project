import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createMeme } from '../services/services';
import UploadWidget from '../components/UploadWidget'; // Asegúrate de que la ruta sea correcta

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState('');

  const onSubmit = async (data) => {
    try {
      if (!imageUrl) {
        throw new Error('Image URL is required');
      }

      const memeData = {
        name: data.name,
        image: imageUrl,
      };

      const createdMeme = await createMeme(memeData);
      console.log('Meme creado:', createdMeme);
      // Aquí puedes manejar la respuesta, por ejemplo, mostrar un mensaje al usuario
    } catch (error) {
      console.error(error.message);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombra tu meme</label>
        <input
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('name', { required: 'El título es obligatorio' })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div className="mb-6">
        <UploadWidget required onUpload={setImageUrl} />
        {errors.imageFile && <span className="text-red-500 text-sm">{errors.imageFile.message}</span>}
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Crear Meme</button>
    </form>
  );
}

export default Form;
