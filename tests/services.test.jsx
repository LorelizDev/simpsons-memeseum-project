import axios from 'axios';
import { getMemes, createMeme, deleteMeme } from '../services/services';

// Mock de axios para evitar hacer peticiones reales
vi.mock('axios');  // Usamos vi.mock() en lugar de vitest.mock()

describe('Services', () => {
  it('fetches memes from the API', async () => {
    // Mock de respuesta de la API
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Test Meme' }] });

    const memes = await getMemes();
    
    expect(memes).toEqual([{ id: 1, name: 'Test Meme' }]);
  });

  it('creates a meme using the API', async () => {
    const newMeme = { name: 'New Meme' };
    axios.post.mockResolvedValue({ data: newMeme });

    const createdMeme = await createMeme(newMeme);
    
    expect(createdMeme).toEqual(newMeme);
  });

  it('deletes a meme using the API', async () => {
    axios.delete.mockResolvedValue({ status: 200 });

    await deleteMeme(1);
    
    expect(axios.delete).toHaveBeenCalledWith('http://localhost:3000/memes/1');
  });
});
