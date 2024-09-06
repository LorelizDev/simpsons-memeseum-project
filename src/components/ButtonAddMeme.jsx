import React from 'react'

const ButtonAddMeme = () => {
  return (
    <div className='w-32 mr-3 pt-3 flex self-start relative'>
        <img src="src/assets/images/simpsons-doh.png" alt="Doh!" className='z-10' />
        <button type="button" className='bg-brown-simp absolute w-full -bottom-5 -left-1 pt-3 pb-1 border border-black rounded-lg shadow-xl hover:bg-amber-800'><p className='font-simpson-title text-yellow-simp drop-shadow-simpson-outline'>Sube tu meme</p></button>
    </div>
  )
}

export default ButtonAddMeme
