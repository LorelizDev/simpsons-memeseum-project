import React, { useState, useEffect } from 'react';
import { faTrash, faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './ButtonIcon';
import { updateMeme } from '../services/services';

const MemeView = ({
	currentImage,
	handleClose,
	handleNext,
	handlePrev,
	handleDelete,
	handleEdit,
	showIcons = true,
}) => {
	if (!currentImage) return null;

	const [isVisible, setIsVisible] = useState(false);
	const [isFlipped, setIsFlipped] = useState(false);
	const [response, setResponse] = useState(null);
	const [like, setLike] = useState(false);
	const [dislike, setDislike] = useState(false);

	useEffect(() => {
		// Cargar estado de like/dislike de localStorage
		const localLike = localStorage.getItem(`like-${currentImage.id}`);
		const localDislike = localStorage.getItem(`dislike-${currentImage.id}`);

		if (localLike === "true") setLike(true);
		if (localDislike === "true") setDislike(true);

		if (currentImage) {
			setIsVisible(true);
		}
	}, [currentImage]);

	const handleAnimationEnd = () => {
		if (!currentImage) {
			setIsVisible(false);
		}
	};

	const handleImageClick = () => {
		setIsFlipped(true);
	};

	const handleResponse = async (answer) => {
		setResponse(answer);
		let updatedMeme = {
			...currentImage,
		};

		if (answer === "sí") {
			setLike(true);
			setDislike(false); // Reinicia el dislike si se ha dado like
			updatedMeme = {
				...updatedMeme,
				like: updatedMeme.like + 1, // Incrementa el like en la base de datos
			};
			localStorage.setItem(`like-${currentImage.id}`, "true");
			localStorage.removeItem(`dislike-${currentImage.id}`);
		} else if (answer === "no") {
			setDislike(true);
			setLike(false); // Reinicia el like si se ha dado dislike
			updatedMeme = {
				...updatedMeme,
				dislike: updatedMeme.dislike + 1, // Incrementa el dislike en la base de datos
			};
			localStorage.setItem(`dislike-${currentImage.id}`, "true");
			localStorage.removeItem(`like-${currentImage.id}`);
		}

		// Actualiza el meme en la base de datos
		await updateMeme(currentImage.id, updatedMeme);

		setTimeout(() => {
			setIsFlipped(false);
			setResponse(null);
		}, 2000);
	};

	return (
		<>
			{/* Fondo borroso cuando se muestra la imagen grande */}
			<div
				className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
				onClick={handleClose}></div>

			{/* Mostrar imagen grande al hacer clic en una miniatura */}
			<div
				className="fixed inset-0 flex items-center justify-center z-20"
				onClick={handleClose}>
				<div
					className={`relative transition-transform transform duration-500 ease-in-out ${
						isVisible
							? "scale-100 opacity-100"
							: "scale-50 opacity-0"
					}`}
					onClick={(e) => e.stopPropagation()}
					onAnimationEnd={handleAnimationEnd}>
					{!isFlipped ? (
						<img
							src={currentImage.image}
							alt={`Imagen Grande ${currentImage.id}`}
							className="w-120 h-120 object-contain cursor-pointer"
							onClick={handleImageClick}
						/>
					) : (
						<div className="flex flex-col items-center justify-center w-120 h-120 bg-white rounded-md">
							<p className="text-blue mb-2">¿Te gustó el meme?</p>
							<div className="flex space-x-2">
								<button
									onClick={() => handleResponse("sí")}
									className="bg-green-500 text-white px-3 py-1 rounded">
									Sí
								</button>
								<button
									onClick={() => handleResponse("no")}
									className="bg-red-500 text-white px-2 py-1 rounded">
									No
								</button>
							</div>
							<p className="text-5xl">
								{like ? "🩷" : "" || dislike ? "💔" : ""}
							</p>
						</div>
					)}

					{/* Condicional para mostrar o no los íconos de papelera y lápiz */}
					{showIcons && (
						<div className="absolute top-4 right-4 flex space-x-2 z-30">
							<ButtonIcon
								icon={faTrash}
								onClick={() => handleDelete(currentImage.id)}
								className={"text-[#f4082c]"}
							/>
							<ButtonIcon
								icon={faEdit}
								onClick={() => handleEdit(currentImage.id)}
								className={"text-white"}
							/>
						</div>
					)}

					{/* Flechas de navegación */}
					<ButtonIcon
						icon={faArrowLeft}
						onClick={(e) => {
							e.stopPropagation();
							handlePrev();
						}}
						className={
							"absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white"
						}
					/>
					<ButtonIcon
						icon={faArrowRight}
						onClick={(e) => {
							e.stopPropagation();
							handleNext();
						}}
						className={
							"absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white"
						}
					/>
				</div>
			</div>
		</>
	);
};

export default MemeView;
