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
				alert("El meme ha sido eliminado correctamente");
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
			className="flex flex-col h-screen max-xs:h-[115vh] -mx-3 pl-6"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "left center",
			}}>
			<div className="flex flex-wrap gap-4 mt-8 justify-center overflow-y-scroll max-h-[450px] w-full">
				{data.map((meme) => (
					<div
						key={meme.id}
						className="border-4 border-blue-500 shadow-xl my-2 p-4  rounded-lg bg-yellow-200 flex flex-col justify-between items-center w-[150px] h-[200px] transform transition-transform duration-300 hover:scale-105" >
						<div className="h-4/5">
							<img
								src={meme.image}
								alt={meme.name}
								className="h-full object-contain cursor-pointer"
								onClick={() => handleClick(meme)}
							/>
						</div>
						<h3 className="text-center mt-2 text-lg font-bold font-simpson-p leading-tight">
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
