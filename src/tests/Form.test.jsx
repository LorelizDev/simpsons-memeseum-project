import { render, screen } from "@testing-library/react";
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
});
