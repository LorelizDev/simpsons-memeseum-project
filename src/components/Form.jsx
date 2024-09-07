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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          {...register('title', { required: 'El título es obligatorio' })}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div>
        <label htmlFor="imageUrl">URL de la Imagen</label>
        <input
          id="imageUrl"
          {...register('imageUrl', { required: 'La URL de la imagen es obligatoria' })}
        />
        {errors.imageUrl && <span>{errors.imageUrl.message}</span>}
      </div>
      <button type="submit">Crear Meme</button>
    </form>
  );
};

export default Form;
