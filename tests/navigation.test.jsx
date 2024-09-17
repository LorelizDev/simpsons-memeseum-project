import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
  it('renders the navigation links correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    // Verificar que existen los enlaces de navegación
    const homeLink = screen.getByText(/home/i);
    const galleryLink = screen.getByText(/gallery/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(galleryLink).toBeInTheDocument();
  });
});
