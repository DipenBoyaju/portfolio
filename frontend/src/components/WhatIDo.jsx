import { useRef } from 'react';
import wedo from '../assets/images/wedo.jpg';
import { motion, useInView } from "framer-motion"

const WhatIDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] p-10 md:p-20 overflow-hidden" id="service">
      <div className="md:grid grid-cols-3 gap-16 items-start">
        <div className="relative w-full h-[23rem] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-left-top bg-no-repeat mb-10 md:mb-0"
            style={{
              backgroundImage: `url(${wedo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className='bg-[hsla(0,100%,2%,1)] animate-ping h-52 w-52 absolute rounded-full mt-16 ml-16'></span>
            <p className='absolute mx-auto font-poppins flex justify-center items-center font-semibold text-2xl uppercase p-10 rounded-full mt-28 ml-20 text-white '>what i do</p>
          </div>
        </div>
        <div className=" flex flex-col gap-8 mt-5 md:mt-0">
          <motion.span className="space-y-1" initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ ease: "linear", duration: 1 }}>
            <h4 className="text-lg font-semibold font-archivo uppercase dark:text-red-50">Custom Website Design</h4>
            <p className="font-poppins text-zinc-500 text-md font-light dark:text-zinc-300">Tailored websites to match your brand’s unique identity and goals.</p>
          </motion.span>
          <motion.span className="space-y-1" initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ ease: "linear", duration: 1, delay: 1.5 }}>
            <h4 className="text-lg font-semibold font-archivo uppercase dark:text-red-50">Landing Page Design</h4>
            <p className="font-poppins text-zinc-500 text-md font-light dark:text-zinc-300">High-conversion landing pages for specific marketing campaigns.</p>
          </motion.span>
          <motion.span className="space-y-1" initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ ease: "linear", duration: 1, delay: 2.5 }}>
            <h4 className="text-lg font-semibold font-archivo uppercase dark:text-red-50">Back-end Development</h4>
            <p className="font-poppins text-zinc-500 text-md font-light dark:text-zinc-300">Building robust back-end systems using technologies like PHP and databases.</p>
          </motion.span>
        </div>
        <div className=" flex flex-col gap-8">
          <motion.span className="space-y-1" initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ ease: "linear", duration: 1, delay: 1 }}>
            <h4 className="text-lg font-semibold font-archivo uppercase dark:text-red-50">Front-end Development</h4>
            <p className="font-poppins text-zinc-500 text-md font-light dark:text-zinc-300">Implementing designs with clean and efficient code using HTML, CSS, JS, ReactJS</p>
          </motion.span>
          <motion.span className="space-y-1" initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ ease: "linear", duration: 1, delay: 2 }}>
            <h4 className="text-lg font-semibold font-archivo uppercase dark:text-red-50">E-commerce Website</h4>
            <p className="font-poppins text-zinc-500 text-md font-light dark:text-zinc-300">Creating user-friendly online stores with secure payment gateways.</p>
          </motion.span>
        </div>
      </div>
    </div >
  )
}
export default WhatIDo