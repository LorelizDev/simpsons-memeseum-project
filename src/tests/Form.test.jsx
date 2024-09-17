import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";
import { MemoryRouter } from "react-router-dom";

describe("Form", () => {
	const mockOnSubmit = vi.fn();

	// Simula la funcionalidad de Cloudinary para evitar el error
	beforeAll(() => {
		window.cloudinary = {
			createUploadWidget: vi.fn().mockReturnValue({
				open: vi.fn(),
				on: vi.fn(),
			}),
		};
	});

	beforeEach(() => {
		render(
			<MemoryRouter>
				<Form title="Publicar Meme" onSubmit={mockOnSubmit} />
			</MemoryRouter>
		);
	});

	test("renders form title correctly", () => {
		const formTitle = screen.getByText(/Publicar Meme/i);
		expect(formTitle).toBeDefined();
	});

	test("renders input for meme name", () => {
		const nameInput = screen.getByLabelText(/Nombra tu meme/i);
		expect(nameInput).toBeDefined();
	});

	//   test('displays validation error when submitting empty name', async () => {
	//     const submitButton = screen.getByRole('button', { name: /Crear Meme/i });

	//     // Intenta enviar el formulario sin llenar el campo de nombre
	//     fireEvent.click(submitButton);

	//     // Verifica si se muestra el mensaje de error
	//     const nameError = await screen.findByText(/El nombre es obligatorio/i);
	//     expect(nameError).toBeDefined();
	//   });

	//   test('calls onSubmit when form is filled and submitted', async () => {
	//     const nameInput = screen.getByLabelText(/Nombra tu meme/i);
	//     const submitButton = screen.getByRole('button', { name: /Crear Meme/i });

	//     // Llenar el campo de nombre
	//     fireEvent.change(nameInput, { target: { value: 'Nuevo Meme' } });

	//     // Simular la subida de una imagen
	//     const imageUrlInput = screen.getByRole('textbox', { name: '' });
	//     fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/meme.jpg' } });

	//     // Enviar el formulario
	//     fireEvent.click(submitButton);

	//     // Verifica si se ha llamado a la función onSubmit
	//     expect(mockOnSubmit).toHaveBeenCalledWith({
	//       name: 'Nuevo Meme',
	//       image: 'http://example.com/meme.jpg',
	//       like: 0,
	//       dislike: 0,
	//     });
	//   });

	//   test('displays image preview after image upload', () => {
	//     const imageUrlInput = screen.getByRole('textbox', { name: '' });

	//     // Simular la subida de una imagen
	//     fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/meme.jpg' } });

	//     // Verificar si la imagen cargada se muestra en la vista previa
	//     const imagePreview = screen.getByRole('img');
	//     expect(imagePreview).toHaveAttribute('src', 'http://example.com/meme.jpg');
	//   });
});
