import React from 'react';
import { useForm } from 'react-hook-form';
import { createMeme } from '../services/services'; // Asegúrate de que la ruta sea correcta

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const createdMeme = await createMeme(data);
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
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Título</label>
        <input
          id="title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('title', { required: 'El título es obligatorio' })}
        />
        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
      </div>
      <div className="mb-6">
        <label htmlFor="imageFile" className="block text-gray-700 font-semibold mb-2">Archivo de Imagen</label>
        <input
          type="file"
          id="imageFile"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('imageFile', {
            required: 'El archivo de imagen es obligatorio',
            validate: {
              acceptedFormats: (files) =>
                ['image/jpeg', 'image/png', 'image/svg+xml'].includes(files[0]?.type) || 'Solo se permiten archivos JPG, PNG o SVG'
            }
          })}
        />
        {errors.imageFile && <span className="text-red-500 text-sm">{errors.imageFile.message}</span>}
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Crear Meme</button>
    </form>
  );
}

export default Form;
