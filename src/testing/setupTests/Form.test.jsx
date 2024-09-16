// src/testing/setupTests/Form.test.jsx
import { render, screen } from '@testing-library/react';
import Form from '../../components/Form';  // Asegúrate de que esta ruta sea correcta

test('renders form correctly', () => {
  render(<Form />);
  const formElement = screen.getByTestId('form');  // Usa data-testid para buscar el formulario
  expect(formElement).toBeInTheDocument();
});
