import { useEffect, useState } from "react"
import { FaInstagram } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"

const Navbar = ({ setShowMenu }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowMenu(false);
    }, 600);
  };

  return (
    <div className="backdrop-blur-md bg-[#1116] h-screen w-full absolute z-50 top-0 left-0 transition overflow-hidden">
      <div className={`bg-[#E3E0DE] dark:bg-[rgba(10,0,0,0.9)] p-14 rounded-[2rem] flex flex-col w-[80vw] right-2 md:w-[30vw] mt-2 absolute transition-all duration-500 ${showContent ? "translate-x-0 transition-all duration-500" : "translate-x-full transition-all duration-500"
        } duration-500 transition ease-in-out`}>
        <div className="flex flex-col gap-6">
          <Link to="/#about" onClick={handleClose} className="text-[2.5rem] font-normal font-archivo hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400 transition-all">About</Link>
          <Link to="/#service" onClick={handleClose} className="text-[2.5rem] font-normal font-archivo hover:text-zinc-500 transition-all dark:text-zinc-100 dark:hover:text-zinc-400">Service</Link>
          <Link to="/#works" onClick={handleClose} className="text-[2.5rem] font-normal font-archivo hover:text-zinc-500 transition-all dark:text-zinc-100 dark:hover:text-zinc-400">Wrok</Link>
          <Link to="/#contact" onClick={handleClose} className="text-[2.5rem] font-normal font-archivo hover:text-zinc-500 transition-all dark:text-zinc-100 dark:hover:text-zinc-400">Contact</Link>
        </div>
        <span className="absolute right-8 border-2 border-zinc-600 dark:border-zinc-300 dark:text-zinc-300 rounded-full p-3 top-6 cursor-pointer hover:text-red-400 hover:border-red-400 dark:hover:text-red-400 dark:hover:border-red-400 transition-all duration-300 hover:rotate-90" onClick={handleClose}><RxCross2 className="text-2xl" /></span>
        <div className="flex gap-5 flex-row mt-14">
          <Link to='https://www.linkedin.com/in/dipen-boyaju-aa877124b/' target="_blank" className="flex text-md items-center gap-2 font-archivo text-zinc-700 hover:text-blue-700 transition-all duration-500 dark:text-zinc-400 dark:hover:text-blue-700">
            <FiLinkedin /> LinkedIn
          </Link>
          <Link to='https://github.com/DipenBoyaju' target="_blank" className="flex text-md items-center text-zinc-700 gap-2 font-archivo hover:text-zinc-900 transition-all duration-500 dark:text-zinc-400 dark:hover:dark:text-zinc-600">
            <FiGithub />Github
          </Link>
          <Link to={'https://www.instagram.com/dipendraboyaju/'} target="_blank" className="flex text-md items-center text-zinc-700 gap-2 font-archivo hover:text-red-500 transition-all duration-500 dark:text-zinc-400 dark:hover:text-red-500">
            <FaInstagram />Instagram
          </Link>
        </div>
      </div>
    </div >
  )
}
export default Navbar