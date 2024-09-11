import React from 'react'
import ButtonImage from './ButtonImage'

const Footer = () => {
  return (
    <footer className='h-20 flex justify-between items-center border-t border-black bg-yellow-simp shadow-[0_-4px_4px_#475569] px-6 mt-12'>
      <div>
				<p className='font-simpson-title text-2xl'>&copy;2024 - Simpson's Memeseum</p>
			</div>
      <div className='h-36 relative -top-14'>
        <ButtonImage 
					url_a='https://github.com/LorelizDev/simpsons-memeseum-project.git'
					target='_blank'
					url_image='src/assets/images/github-simpson.png'
					alt_image='Imagen de GitHub con forma de personaje de Los Simpson'
				/>
      </div>
    </footer>
  )
}

export default Footer
