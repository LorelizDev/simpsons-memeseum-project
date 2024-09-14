import axios from 'axios';
const URL_API = "http://localhost:3000/memes"


// GET
export const getMemes = async () => {
  try {
    const response = await axios.get(URL_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// POST
export const createMeme = async (data) => {
  try {
    const response = await axios.post(URL_API, data);
    return response.data;
  } catch (error) {
    console.error('Error creating meme:', error);
    return null;
  }
};

// REQUEST DELETE
 // Función para eliminar un meme por ID
 export const deleteMeme = async (id) => {
  if (confirm('¿Estás seguro de que quieres eliminar este meme?')) {
    try {
      // Hacemos una solicitud DELETE a la API
      await axios.delete(`${URL_API}/${id}`);
    } catch (error) {
      console.error('Error deleting meme:', error);
    
    }
  }
};
