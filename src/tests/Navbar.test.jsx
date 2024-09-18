import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);
	});

	test("renders Navbar with title", () => {
		const showTitle = screen.getByText(/Simpson's Memeseum/i);
		expect(showTitle).toBeDefined();
	});

	test("renders ButtonImage with correct alt text", () => {
		const buttonImage = screen.getByAltText(/Logo Simpson's Memesuem/i);
		expect(buttonImage).toBeDefined();
	});

	test("renders ButtonAddMeme component", () => {
		const buttonAddMeme = screen.getByRole("button", {
			name: /Sube tu meme/i,
		});
		expect(buttonAddMeme).toBeDefined();
	});
});
