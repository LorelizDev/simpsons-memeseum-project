import { getMemes, createMeme, deleteMeme } from '../services/services';
import axios from 'axios';

jest.mock('axios');

test('fetches memes successfully', async () => {
  axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Test Meme' }] });
  const memes = await getMemes();
  expect(memes.length).toBe(1);
  expect(memes[0].name).toBe('Test Meme');
});
