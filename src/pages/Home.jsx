import React from 'react'
import ButtonImage from '../components/ButtonImage'



const Home = () => {
  return (
    <div className='relative flex justify-center mx-10 h-[calc(100vh-9rem-5rem-5rem)]'> {/* 9rem mide el navbar, 5rem del footer, 2.5rem (x2) de margen de nav y footer */}
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
