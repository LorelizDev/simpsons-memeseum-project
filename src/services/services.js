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