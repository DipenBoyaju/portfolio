import { CornerRightDown, MoveRight } from 'lucide-react'
import bg from '../assets/images/bg.png'
import { useRef, useState } from 'react'
import GetInTouch from './GetInTouch';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = ({ theme }) => {
  const [showContact, setShowContact] = useState(false);
  const strokeColor = theme === 'dark' ? '#DC2703' : '#EC6161';

  const ref = useRef(null)
  const isInView = useInView(ref)
  const nav = useNavigate();

  return (
    <div ref={ref} className="w-full overflow-hidden h-full bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] pb-8" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="px-8 lg:px-16">
        <div className="pt-28 md:pt-36">
          <motion.h1 initial={{ y: 50 }} animate={isInView ? { y: 0 } : { y: 50 }} transition={{ ease: "linear", duration: 0.8 }} className='font-archivo font-bold text-6xl uppercase md:text-9xl lg:text-[10rem] dark:text-zinc-100'><span style={{
            color: 'transparent',
            WebkitTextStroke: `3px ${strokeColor}`,
          }}>D</span>ipen <motion.span style={{
            color: 'transparent',
            WebkitTextStroke: `3px ${strokeColor}`,
          }}>B</motion.span>oyaj<span style={{
            color: 'transparent',
            WebkitTextStroke: `3px ${strokeColor}`,
          }}>u</span></motion.h1>
        </div>
        <div className="md:grid grid-cols-2 pt-10 md:pt-20">
          <div className=''>
            <p className='font-poppins flex gap-3 animate-bounce cursor-pointer transition-all duration-900 hover:text-zinc-600 underline underline-offset-8 pl-2 lg:pl-3 dark:text-zinc-300' onClick={() => setShowContact((prev) => !prev)}>Hit Me Up <MoveRight /></p>
          </div>
          <motion.div className="" initial={{ y: 60 }} animate={isInView ? { y: 0 } : { y: 60 }} transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}>
            <h2 className='text-3xl font-semibold font-poppins leading-10 pt-8 md:pt-0 pb-8 md:pb-0 dark:text-zinc-200'>
              I am a Software Developer with a passion for building clean, user-friendly interfaces and robust applications.
            </h2>
            <button onClick={() => nav('/#works')} className='text-lg flex items-center gap-3 bg-red-400 hover:bg-red-500 transition-all duration-500 text-white py-3 px-8 rounded-full font-archivo md:mt-10 uppercase dark:bg-[rgba(10,0,0,0.9)] dark:hover:bg-[rgba(10,0,0,0.6)]'>Explore my works <CornerRightDown size={20} className='animate-bounce -mb-3' /></button>
          </motion.div>
        </div>
      </div>
      {
        showContact ? <GetInTouch setShowContact={setShowContact} /> : ''
      }
    </div>
  )
}
export default Hero