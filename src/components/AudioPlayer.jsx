// AudioPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import audioFile from '../assets/sounds/SimpsonsIntro.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null); // useRef siempre devuelve un objeto con una propiedad llamada 'current'
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
      <audio ref={audioRef} src={audioFile} loop />
      <button
        onClick={togglePlayPause}
        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-blue-700"
      >
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  );
};

export default AudioPlayer;

