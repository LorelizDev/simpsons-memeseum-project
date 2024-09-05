import axios from 'axios';



// GET
export const fetchMemes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/memes');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
