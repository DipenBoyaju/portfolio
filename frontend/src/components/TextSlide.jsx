import Marquee from "react-fast-marquee";
import logo from '../assets/images/logo.png'

const TextSlide = ({ theme }) => {
  const strokeColor = theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

  return (
    <div className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] py-10 pt-16 md:py-20 md:pt-28 uppercase font-semibold font-archivo  lg:text-9xl md:text-8xl text-8xl flex overflow-hidden">
      <Marquee className='overflow-hidden' speed={300}>
        <p className="text-transparent whitespace-nowrap" style={{ WebkitTextStroke: `1px ${strokeColor}` }}>Front-end Development</p>
        <p className='whitespace-nowrap dark:text-zinc-50'>Back-end Development</p>
        <p className="text-transparent whitespace-nowrap" style={{ WebkitTextStroke: `1px ${strokeColor}` }}>Custom Website Design</p>
        <p className='whitespace-nowrap dark:text-zinc-50'>Landing Page Desing</p>
        <p className="text-transparent whitespace-nowrap dark:text-zinc-100" style={{ WebkitTextStroke: `1px ${strokeColor}` }}>E-Commerce Website</p>
        <img src={logo} alt="" className="w-16 md:w-24" />
        {/* <p className='whitespace-nowrap'>-<span className='text-red-500'>D</span><span className='text-blue-500'>B</span>-</p> */}
      </Marquee>
    </div >
  )
}
export default TextSlide