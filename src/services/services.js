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

<<<<<<< HEAD
// POST
export const createMeme = async () => {
  try {
    const response = await axios.post(URL_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


//PUT

//DELETE
=======
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
>>>>>>> d8b22febc2e374b5a1ab827d38ee4b1c3dd5eea7
