import React from 'react'
import ButtonImage from '../components/ButtonImage'



const Home = () => {
  return (
    <div className='relative flex justify-center'>
      <img src="src/assets/images/front-museum.jpg" alt="Fachada de Simpson's Memeseum" className='max-h-full border-none rounded-3xl' />
      <div className='absolute h-1/5 bottom-[32%] active:scale-90 active:hue-rotate-30'>
        <ButtonImage 
          url_a='main-gallery'
          url_image="src/assets/images/buttton-enter.png"
          alt_img="Botón para entrar a la galería"
        />
      </div>
    </div>
  )
}

export default Home
