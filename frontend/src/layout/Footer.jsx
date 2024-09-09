import { MoveUpRight } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Link } from "react-router-dom"
import logo from '../assets/images/logo.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <div className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] pt-10 pb-5 px-10 overflow-hidden">
      <div className="bg-[#ebebeb] dark:bg-[rgba(10,0,0,0.9)] p-5 rounded-xl">
        <div className="">
          {/* <h3 className="uppercase font-poppins font-bold text-4xl md:text-8xl text-center pb-3 cursor-pointer text-zinc-900 dark:text-zinc-50 group "><span className="">-<span className="text-zinc-800 dark:text-zinc-100 ">.</span>D</span><span className="">B<span className="text-zinc-800 dark:text-zinc-100">.</span>-</span></h3> */}
          <div className="items-center flex justify-center pb-5">
            <img src={logo} className="w-16 " alt="" />
          </div>

        </div>
        <div className="flex justify-between ">
          <p className="font-poppins text-zinc-900 text-lg dark:text-zinc-50">©2024 Dipen Boyaju</p>
          <span className="md:hidden gap-4 text-zinc-900 flex">
            <Link to='https://www.linkedin.com/in/dipen-boyaju-aa877124b/' target="_blank" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-700 transition-all duration-500"><FiLinkedin /></Link>
            <Link to='https://github.com/DipenBoyaju' target="_blank" className="hover:text-zinc-900 transition-all duration-500 dark:hover:text-zinc-900  text-zinc-700 dark:text-zinc-300"><FiGithub /></Link>
            <Link className="hover:text-red-500 dark:hover:text-red-500  transition-all duration-500 text-zinc-700 dark:text-zinc-300"><FaInstagram /></Link>
          </span>
          <span className="md:flex hidden gap-4 text-zinc-900">
            <Link to='https://www.linkedin.com/in/dipen-boyaju-aa877124b/' target="_blank" className="flex uppercase font-semibold text-lg items-center text-zinc-700 hover:text-blue-700 transition-all duration-500 dark:hover:text-blue-700 dark:text-zinc-400">LinkedIn<MoveUpRight size={18} /></Link>
            <Link to='https://github.com/DipenBoyaju' target="_blank" className="flex uppercase font-semibold text-lg items-center hover:text-zinc-900 dark:hover:text-zinc-900  transition-all duration-500 text-zinc-700 dark:text-zinc-400">Github<MoveUpRight size={18} /></Link>
            <Link to={'https://www.instagram.com/dipendraboyaju/'} target="_blank" className="flex uppercase font-semibold text-lg items-center hover:text-red-500 dark:hover:text-red-500 transition-all duration-500 text-zinc-700 dark:text-zinc-400">instagram<MoveUpRight size={18} /></Link>
          </span>
          <p className="text-xl font-semibold uppercase font-archivo hidden md:block cursor-pointer text-zinc-900 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300 hover:animate-bounce dark:text-zinc-50" onClick={scrollToTop}>Go Back to Top</p>
        </div>
      </div>

    </div>
  )
}
export default Footer