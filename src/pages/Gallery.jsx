import React from 'react';
import S1Image from '../assets/images/S1.png'; // Importa la imagen

const Home = () => {
  return (
    <div className="min-h-screen">
      
      <img 
        src={S1Image} 
        alt="Descripción de la imagen" 
        className="w-full h-[600px] object-cover" // Ancho completo y altura de 700px
      />
      
    </div>
  );
};

export default Home;



