import React from 'react'
import { Link } from 'react-router-dom'

const ButtonImage = ({url_a, target=null, url_image, alt_img, onClick}) => {
  return (
    <button type="button" className='h-full hover:scale-110 transition-all duration-300 ease-in-out' onClick={onClick}>
        <Link to={url_a} target={target} rel="noopener noreferrer">
            <img src={url_image} alt={alt_img} className='h-full' />
        </Link>
    </button>
  )
}

export default ButtonImage