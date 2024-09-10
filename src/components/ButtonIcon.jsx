// src/components/ButtonIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = ({ icon, onClick, className }) => {
  return (
    <button
      className={`text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default ButtonIcon;



{/* <ButtonIcon
            icon={faTrash}
            onClick={() => console.log('Trash clicked')}
          />
          <ButtonIcon
            icon={faEdit}
            onClick={() => console.log('Edit clicked')}
          /> */}
