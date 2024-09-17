import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  beforeEach(() => {
    // Envuelve el componente Navbar con MemoryRouter
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  test('renders Footer with title', () => {
    const showTitle = screen.getByText(/Simpson's Memeseum/i);
    expect(showTitle).toBeDefined(); 
  });

  test('renders ButtonImage with correct URL', () => {
    const buttonImage = screen.getByAltText(/Imagen de GitHub con forma de personaje de Los Simpson/i);
    expect(buttonImage.getAttribute('src')).to.equal('src/assets/images/github-simpson.png');
  });

  
});
