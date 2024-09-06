import React from 'react'
import ButtonAddMeme from './ButtonAddMeme'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-36 bg-[url("src/assets/images/simpson_sky_background-removebg.png")]'>
      <div className='w-28 ml-3'>
        <img src="src/assets/images/logo-simpson-removebg.png" alt="Logo Simpson's Memesuem"/>
      </div>
      <div>
        <h1 className='font-simpson-title text-center text-6xl text-yellow-simp drop-shadow-simpson-title-ds'>Simpson's Memeseum</h1>
      </div>
      <ButtonAddMeme />
    </nav>
  )
}

export default Navbar
