import { render, screen } from '@testing-library/react';
import Gallery from '../src/pages/Gallery';

describe('Gallery Component', () => {
  it('renders gallery images', () => {
    render(<Gallery />);

    // Verificar que las imágenes de la galería se renderizan
    const images = screen.getAllByRole('img');
    
    // Asegurarse de que hay imágenes cargadas
    expect(images.length).toBeGreaterThan(0);
  });
});
