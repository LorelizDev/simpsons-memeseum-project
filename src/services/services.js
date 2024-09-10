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

// DELETE
export const deleteMeme = async (id) => {
    try {
      // Hacemos una solicitud DELETE a la API
      await axios.delete(`${URL_API}/${id}`);
    } catch (error) {
      console.error('Error deleting meme:', error);
    }
};