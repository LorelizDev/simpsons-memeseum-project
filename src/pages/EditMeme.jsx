import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getOneMeme, updateMeme } from '../services/services';
import Form from '../components/Form';

const EditMeme = () => {
  const { id } = useParams(); // Obtener el id del meme desde la URL
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  // Obtener los datos del meme por ID
  useEffect(() => {
    const loadMeme = async () => {
      try {
        const meme = await getOneMeme(id);
        setInitialData(meme);
      } catch (error) {
        console.error('Error fetching meme data:', error.message);
      }
    };
    loadMeme();
  }, [id]);

  const handleUpdate = async (memeData) => {
    try {
      await updateMeme(id, memeData);
      alert("Meme actualizado correctamente.")
      navigate('/full-gallery');
    } catch (error) {
      console.error('Error updating meme:', error.message);
    }
  };

  if (!initialData) return <p className='block mx-auto font-simpson-p text-3xl'>Loading...</p>;

  return (
    <div className="p-4">
      <Form title={'Actualizar Meme'} onSubmit={handleUpdate} initialData={initialData} isEditing={true} />
      <div className="flex justify-center mt-4"> 
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

export default EditMeme;
