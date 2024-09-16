import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '.';

test('navigates to gallery page', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Esperar a que el texto "Enter Gallery" esté disponible en el DOM
  expect(await screen.findByText(/Enter Gallery/i)).toBeInTheDocument();
});
