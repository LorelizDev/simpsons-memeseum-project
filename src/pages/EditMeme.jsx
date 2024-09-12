import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getOneMeme, updateMeme } from '../services/services';

const EditMeme = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { id } = useParams(); // Obtener el id del meme desde la URL
  const navigate = useNavigate();

  // Obtener los datos del meme por ID
  useEffect(() => {
    const loadMeme = async () => {
      const meme = await getOneMeme(id);
      setValue('name', meme.name); // Pre-rellena el campo de título
    };
    loadMeme();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const memeData = {
      name: data.name,
    }
    if (data.imageFile.length > 0) {
      memeData.imageFile = data.imageFile[0]; // Solo agregar imagen si el usuario subió una nueva
    }
    
    try {
      const editedMeme = await updateMeme(id, memeData);
      console.log('Meme actualizado:', editedMeme);
      alert("Meme actualizado correctamente.")
      navigate('/full-gallery', { replace: true });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Título</label>
        <input
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('name', { required: 'El título es obligatorio' })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div className="mb-6">
        <label htmlFor="imageFile" className="block text-gray-700 font-semibold mb-2">Archivo de Imagen</label>
        <input
          type="file"
          id="imageFile"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('imageFile', {
            validate: {
              acceptedFormats: (files) =>
                files.length === 0 || // No es obligatorio subir una nueva imagen para la actualización
                ['image/jpeg', 'image/png', 'image/svg+xml'].includes(files[0]?.type) || 'Solo se permiten archivos JPG, PNG o SVG',
            },
          })}
        />
        {errors.imageFile && <span className="text-red-500 text-sm">{errors.imageFile.message}</span>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Actualizar Meme
      </button>
    </form>
  );
};

export default EditMeme;
