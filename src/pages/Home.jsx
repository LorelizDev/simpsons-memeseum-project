import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonImage from "../components/ButtonImage";
import AudioPlayer from "../components/AudioPlayer";
import audioFile from "../assets/sounds/marge1.mp3";
import myImage from "../assets/images/manual.png";
import { Link } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
      navigate('/main-gallery');  
  };

	return (
		<div className="relative flex justify-center">
			<AudioPlayer src={audioFile} />
			<img
				src="src/assets/images/front-museum.jpg"
				alt="Fachada de Simpson's Memeseum"
				className="max-h-full border-none rounded-3xl"
			/>
			<div className="absolute h-1/5 bottom-[32%] active:scale-90 active:hue-rotate-30">
				<ButtonImage
					url_img="src/assets/images/buttton-enter.png"
					alt_img="Botón para entrar a la galería"
					onClick={handleButtonClick}
					url_a="./main-gallery"
				/>
			</div>
			<Link to="/manual-use">
				<img
					src={myImage}
					alt="Manual"
					className="absolute top-[-4.8%] left-[30%] w-2/5 h-1/6 cursor-pointer transition-transform duration-300 img-bright-yellow"
				/>
			</Link>
			
		</div>
	);
};

export default Home;
