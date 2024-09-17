import React, { useState, useEffect } from "react";
import { getMemes, deleteMeme } from "../services/services";
import backgroundImage from "../assets/images/FullGallery.png";
import MemeView from "../components/MemeView";
import { useNavigate } from "react-router-dom";

const FullGallery = () => {
	const [data, setData] = useState([]);
	const [selectedMeme, setSelectedMeme] = useState(null);
	const [showLargeImage, setShowLargeImage] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const loadMemes = async () => {
			const memes = await getMemes();
			setData(memes);
		};

		loadMemes();
	}, []);

	const handleClick = (meme) => {
		setSelectedMeme(meme);
		setShowLargeImage(true);
	};

	const handleClose = () => {
		setSelectedMeme(null);
		setShowLargeImage(false);
	};

	const handleDelete = async (memeId) => {
		const confirmDelete = window.confirm(
			"¿Estás seguro de que quieres eliminar este meme?"
		);
		if (confirmDelete) {
			try {
				await deleteMeme(memeId);
				setData(data.filter((meme) => meme.id !== memeId));
				handleClose();
			} catch (error) {
				console.error("Error al eliminar el meme:", error);
				alert("Hubo un error al eliminar el meme. Inténtalo de nuevo.");
			}
		} else {
			console.log("Eliminación cancelada");
		}
	};

	const handleEdit = (memeId) => {
		console.log("Navigating to edit page");
		navigate(`/edit/${memeId}`);
	};

	const handleNext = () => {
		if (selectedMeme) {
			const currentIndex = data.findIndex(
				(meme) => meme.id === selectedMeme.id
			);
			const nextIndex = (currentIndex + 1) % data.length;
			setSelectedMeme(data[nextIndex]);
		}
	};

	const handlePrevious = () => {
		if (selectedMeme) {
			const currentIndex = data.findIndex(
				(meme) => meme.id === selectedMeme.id
			);
			const prevIndex = (currentIndex - 1 + data.length) % data.length;
			setSelectedMeme(data[prevIndex]);
		}
	};

	return (
		<div
			className="flex flex-col h-screen -mx-3 pl-6"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "left center",
			}}>
			<div
				className="flex flex-wrap gap-4 mt-8 justify-center overflow-y-scroll max-h-[370px] w-full">
				{data.map((meme) => (
					<div
						key={meme.id}
						className="border-4 border-blue-500 shadow-xl p-6 rounded-lg bg-yellow-200 flex flex-col items-center"
						style={{ width: "150px", height: "175px" }}>
						<img
							src={meme.image}
							alt={meme.name}
							className="w-full h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
							onClick={() => handleClick(meme)}
						/>
						<h3 className="text-center mt-2 text-sm font-bold">
							{meme.name}
						</h3>
					</div>
				))}
			</div>

			{showLargeImage && selectedMeme && (
				<MemeView
					currentImage={{ ...selectedMeme }}
					handleClose={handleClose}
					handleNext={handleNext}
					handlePrev={handlePrevious}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					showIcons={true}
				/>
			)}
		</div>
	);
};

export default FullGallery;
