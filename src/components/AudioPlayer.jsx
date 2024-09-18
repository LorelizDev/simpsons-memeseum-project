import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ src }) => {
	// useRef siempre devuelve un objeto con una propiedad llamada 'current'
	const audioRef = useRef(null); 
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (audioRef.current && src) {
			audioRef.current.volume = 0.1;
			audioRef.current.play();
			setIsPlaying(true);
		}
	}, [src]);

	const togglePlayPause = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	return (
		<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
			<audio ref={audioRef} src={src} loop />
			<button
				onClick={togglePlayPause}
				className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-blue-700">
				{isPlaying ? "Pausar" : "Reproducir"}
			</button>
		</div>
	);
};

export default AudioPlayer;
