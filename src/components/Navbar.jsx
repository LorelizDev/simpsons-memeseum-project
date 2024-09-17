import React from 'react'
import ButtonAddMeme from './ButtonAddMeme'
import ButtonImage from './ButtonImage'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-12 h-36 bg-[url("src/assets/images/simpson_sky_background-removebg.png")]'>
      <div className='w-32 ml-3'>
        <ButtonImage 
          url_a='/'
          url_img='src/assets/images/logo-simpson-removebg.png'
          alt_img="Logo Simpson's Memesuem"
        />
      </div>
      <div>
        <h1 className='font-simpson-title text-center text-5xl md:text-6xl max-xs:hidden text-yellow-simp drop-shadow-simpson-title-ds'>Simpson's Memeseum</h1>
      </div>
      <div className='h-full'>
        <ButtonAddMeme />
      </div>
    </nav>
  )
}

export default Navbar
