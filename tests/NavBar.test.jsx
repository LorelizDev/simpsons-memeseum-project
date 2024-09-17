NavBar.test.jsx

import { render, screen } from '<@&1280192995978641498>-library/react';
import Navbar from '../components/Navbar'; // Ajusta la ruta según sea necesario
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter

describe('Navbar', () => {
  beforeEach(() => {
    // Envuelve el componente Navbar con MemoryRouter
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  test('renders Navbar with title', () => {
    const showTitle = screen.getByText(/Simpson's Memeseum/i);
    expect(showTitle).toBeDefined(); 
  });

  test('renders ButtonImage with correct alt text', () => {
    const buttonImage = screen.getByAltText(/Logo Simpson's Memesuem/i);
    expect(buttonImage).toBeDefined();
  });

  test('renders ButtonAddMeme component', () => {
    const buttonAddMeme = screen.getByRole('button', { name: /Sube tu meme/i });
    expect(buttonAddMeme).toBeDefined();
  });
});