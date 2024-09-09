import { MoveRight } from "lucide-react"
import { useEffect, useState } from "react"
import { FaInstagram } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import GetInTouch from "../components/GetInTouch"
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false)
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setIsAtTop(currentScrollY === 0);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <motion.div initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: scrollDirection === 'down' ? 0 : 1, y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }} className={`flex justify-between items-center p-6 lg:px-10 w-full fixed z-40 transition-colors duration-300 ${isAtTop ? "bg-transparent lg:py-8" : "bg-[#F0F5FD] border-b-[1px] dark:bg-[#0C0202] border-zinc-300 dark:border-[#000000]"} `}>
      <div className="cursor-pointer" onClick={() => nav('/')}>
        <img src={logo} alt="Dipen Boyaju" className="w-10" />
      </div>
      <div className="md:flex gap-5 flex-row hidden">
        <Link to='https://www.linkedin.com/in/dipen-boyaju-aa877124b/' target="_blank" className="flex text-md items-center gap-2 font-archivo text-zinc-700 dark:text-zinc-200 dark:hover:text-blue-700 hover:text-blue-700">
          <FiLinkedin /> LinkedIn
        </Link>
        <Link to='https://github.com/DipenBoyaju' target="_blank" className="flex text-md items-center text-zinc-700 dark:text-zinc-200 gap-2 font-archivo hover:text-zinc-900 dark:hover:text-zinc-700">
          <FiGithub />Github
        </Link>
        <Link to={'https://www.instagram.com/dipendraboyaju/'} target="_blank" className="flex text-md items-center text-zinc-700 gap-2 dark:text-zinc-200 font-archivo hover:text-red-500 dark:hover:text-red-500 transition-all duration-500">
          <FaInstagram />Instagram
        </Link>
      </div>

      <div className="">
        <button className="flex gap-2 items-center font-semibold text-md hover:scale-105 transition-all duration-500 hover:text-red-500 dark:text-zinc-50 dark:hover:text-zinc-200" onClick={() => setShowMenu((prev) => !prev)}><HiOutlineMenuAlt4 className="text-3xl" />Menu</button>
      </div>
      <div className="">
        <button className={`bg-red-400 text-white rounded-full py-2 lg:px-6 text-lg flex items-center gap-2 px-3 hover:scale-105 hover:bg-red-500 transition-all duration-500 ${isAtTop ? 'dark:bg-[rgba(10,0,0,0.9)] dark:hover:bg-[rgba(10,0,0,0.6)]' : 'dark:bg-zinc-900 dark:hover:bg-zinc-700'}`} onClick={() => setShowContact((prev) => !prev)}>Get In Touch <MoveRight className="animate-pulse" /></button>
      </div>
      {
        showMenu ? <Navbar setShowMenu={setShowMenu} /> : ''
      }
      {
        showContact ? <GetInTouch setShowContact={setShowContact} /> : ''
      }
    </motion.div>
  )
}
export default Header