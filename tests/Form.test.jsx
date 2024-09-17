import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../src/components/Form';

describe('Form Component', () => {
  it('renders the form correctly', () => {
    
    render(<Form />)
    // Verificar que el formulario tiene un campo de entrada y un botón de envío
    
  
    const submitButton = screen.getByRole('button', { type: /submit/i });
    
    //expect(title).toBeDefined()
    expect(submitButton).toBeDefined();
  });

  // it('submits form with valid data', () => {
  //   render(<Form />);
    
  //   const input = screen.getByTestId('title');
  //   const submitButton = screen.getByRole('button', { type: /submit/i });

  //   // Simular que el usuario introduce un título
  //   fireEvent.change(input, { target: { value: 'Funny Meme' } });
    
  //   // Simular envío del formulario
  //   fireEvent.click(submitButton);

  //   // Verificar que el input está vacío tras el envío
  //   expect(input.value).toBe('');
  // });
});
