// ButtonImage.jsx
import React from 'react';

const ButtonImage = ({ url_a, target, url_image, alt_img, onClick }) => {
  return (
    <button 
      type="button" 
      className='h-full hover:scale-110 transition-all duration-300 ease-in-out'
      onClick={onClick}
    >
      <a href={url_a} target={target} rel="noopener noreferrer">
        <img src={url_image} alt={alt_img} className='h-full' />
      </a>
    </button>
  );
};

export default ButtonImage;
