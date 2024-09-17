import { Link } from "react-router-dom";

const ButtonAddMeme = () => {
  return (
    <Link to='newmeme' className='w-28 sm:w-36 mr-3 pt-3 flex self-start relative hover:scale-110 group transition-all duration-300 ease-in-out'>
        <img src="src/assets/images/simpsons-doh.png" alt="Doh!" className='z-10' />
        <button type="button" className='bg-brown-simp absolute w-full -bottom-5 -left-1 pt-3 pb-1 border border-black rounded-lg shadow-xl group-hover:bg-amber-800 '><p className='font-simpson-title text-yellow-simp drop-shadow-simpson-outline'>Sube tu meme</p></button>
    </Link>
  )
}

export default ButtonAddMeme
