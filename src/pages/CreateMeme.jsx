import React from 'react';
import { createMeme } from '../services/services';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

const CreateMeme = () => {
  const navigate = useNavigate();
  const handleCreate = async (memeData) => {
    try {
      await createMeme(memeData);
      alert("Meme creado correctamente.")
      navigate('/full-gallery');
    } catch (error) {
      console.error('Error creating meme:', error.message);
    }
  };

  return (
    <div className="mx-auto p-4 w-4/6 max-md:w-full">
      <Form title={'Publicar Meme'} onSubmit={handleCreate} />
      <div className="flex justify-center mt-4"> {/* Contenedor para centrar el botón */}
        <button
          onClick={() => navigate('/full-gallery')}
          className="px-4 py-2 bg-yellow-500 text-black rounded font-simpson-p"
        >
          Ir a Galería Completa
        </button>
      </div>
    </div>
  );
};

export default CreateMeme;
