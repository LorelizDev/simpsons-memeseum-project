import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../components/UploadWidget';

const Form = ({ title, onSubmit, initialData = {}, isEditing = false }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: initialData, // Pre-rellenar los datos en caso de edición
  });
  const [imageUrl, setImageUrl] = useState(initialData.image || '');
  const [submitted, setSubmitted] = useState(false); // Estado para rastrear si el formulario ha sido enviado
  const [like, setLike] = useState(initialData.like);
  const [dislike, setDislike] = useState(initialData.dislike);
  const navigate = useNavigate();

  // Pre-rellenar los valores del formulario cuando se edita
  useEffect(() => {
    if (isEditing && initialData) {
      setValue('name', initialData.name);
      setImageUrl(initialData.image || '');
    } else {
      // Inicializar like/dislike en 0 si se está creando un meme
      setLike(0);
      setDislike(0);
    }
  }, [isEditing, initialData, setValue]);

  const handleOnSubmit = async (data) => {
    setSubmitted(true); // Marca el formulario como enviado
    try {
      if (!imageUrl && !isEditing) {
        throw new Error('Image URL is required');
      }

      const memeData = {
        name: data.name,
        image: imageUrl,
        like: like,
        dislike: dislike
      };

      await onSubmit(memeData);
      navigate('/full-gallery', {replace:true});
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2 className='font-simpson-title text-center text-4xl text-pink-simp drop-shadow-simpson-title-ds mb-10'>{title}</h2>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="w-1/2 mx-auto p-10 bg-gray-100 shadow-lg rounded-lg font-simpson-p">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-2xl font-semibold mb-2">Nombra tu meme</label>
          <input
            id="name"
            className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <span className="text-red-500 text-lg">{errors.name.message}</span>}
        </div>
        <div className="mb-6">
          <UploadWidget onUpload={setImageUrl} />
          <input 
            className='w-full bg-transparent text-gray-700 border-none cursor-default focus:outline-none'
            id='image'
            value={imageUrl}
            readOnly
            type={imageUrl==='' ? 'hidden' : 'text'}
          />
          {/* Mostrar un mensaje de error si se ha intentado enviar el formulario sin subir una imagen */}
          {(!isEditing && submitted && imageUrl === '' && <span className="text-red-500 text-lg">La imagen es obligatoria</span>)}
          <img src={imageUrl} alt="" className='block mx-auto w-40' />
        </div>
        <button type="submit" className="block mx-auto bg-brown-simp w-48 py-3 border border-black rounded-lg shadow-xl hover:bg-amber-800 transition-all duration-300 active:scale-90">
          <p className='font-simpson-title text-lg text-yellow-simp drop-shadow-simpson-outline'>
            {isEditing ? 'Actualizar Meme' : 'Crear Meme'}
          </p>
        </button>
      </form>
    </div>
  );
}

export default Form;