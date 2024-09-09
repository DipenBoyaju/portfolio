import { useRef, useState } from 'react';
import profile from '../assets/images/profile.png';
import { useInView, motion } from 'framer-motion';
import { Mail, MoveRight } from 'lucide-react';
import GetInTouch from './GetInTouch';

const LetsWork = () => {
  const [showContact, setShowContact] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="px-10 pt-10 bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] overflow-hidden" id='contact'>
      <div className="bg-[#ebebeb] dark:bg-[rgba(10,0,0,0.9)] rounded-3xl md:p-10 p-8">
        <div className="">
          <motion.h1 initial={{ y: 50 }} animate={isInView ? { y: 0 } : { y: 50 }} transition={{ ease: "linear", duration: 1.5 }} className="font-archivo text-[3rem] md:text[8rem] lg:text-[11rem] text-center font-semibold uppercase leading-none text-zinc-800 dark:text-zinc-50">Let’s W<span className="inline-block">
            <motion.img initial={{ opacity: 0, rotate: 180 }} animate={isInView ? { opacity: 1, rotate: 360 } : { opacity: 0, }} transition={{ ease: "linear", duration: 1.5, delay: 1.5 }}
              src={profile}
              alt=""
              className="w-[2.2rem] md:w-[2rem] lg:w-[9rem] object-contain align-middle lg:-mt-8 -mt-2"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </span>rk Together</motion.h1>
        </div>
        <p className="pt-6 md:text-xl font-poppins text-zinc-500 text-center dark:text-zinc-300">Lets make something beautiful and blow your audience’s mind.</p>
        <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-10">
          <a href="mailto:boyaju.dipen@gmail.com" className='dark:text-zinc-300 font-archivo underline underline-offset-8 flex gap-2 items-center dark:hover:text-zinc-500 transition-all duration-500 cursor-pointer'><Mail size={20} />Write an Email</a>
          <p className='font-archivo text-2xl md:text-2xl text-center font-semibold text-orange-600'>boyaju.dipen@gmail.com</p>
          <button className='dark:bg-zinc-900 font-poppins py-3 px-6 rounded-full text-zinc-700 flex items-center gap-2 dark:hover:bg-zinc-700 bg-white dark:text-zinc-200 transition-all hover:bg-zinc-300 duration-500' onClick={() => setShowContact((prev) => !prev)}>Contact Via Form <MoveRight className='animate-bounce' /></button>
        </div>
      </div>
      {
        showContact ? <GetInTouch setShowContact={setShowContact} /> : ''
      }
    </div>
  )
}
export default LetsWork