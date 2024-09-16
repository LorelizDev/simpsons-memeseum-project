import axios from "axios";
const URL_API = "http://localhost:3000/memes";

// GET
export const getMemes = async () => {
  try {
    const response = await axios.get(URL_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// GET: Obtener un meme
export const getOneMeme = async (id) => {
  try {
    const response = await axios.get(`${URL_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// POST
export const createMeme = async (data) => {
  try {
    const response = await axios.post(URL_API, data);
    return response.data;
  } catch (error) {
    console.error("Error creating meme:", error);
    return null;
  }
};

// PUT
export const updateMeme = async (id, data) => {
  try {
    const response = await axios.put(`${URL_API}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating meme with id ${id}:`, error);
  }
};

// DELETE
export const deleteMeme = async (id) => {
  try {
    // Hacemos una solicitud DELETE a la API
    await axios.delete(`${URL_API}/${id}`);
  } catch (error) {
    console.error("Error deleting meme:", error);
  }
};
