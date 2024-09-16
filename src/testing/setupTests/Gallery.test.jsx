import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Gallery from '../Gallery';
import * as services from '../services/services';



// Mock de la función getMemes
vi.mock('../services/services', () => ({
  getMemes: vi.fn(),
}));

describe('Gallery component', () => {
  it('renders gallery with memes', async () => {
    // Configurar el mock para que devuelva un valor específico
    services.getMemes.mockResolvedValue([{ id: 1, name: 'Meme 1', image: 'image1.png' }]);

    // Renderizar el componente
    render(<Gallery />);

    // Buscar la imagen del meme en el DOM
    const memeImage = await screen.findByAltText('Meme 1');

    // Verificar que la imagen esté en el documento
    expect(memeImage).toBeInTheDocument();
  });
});

