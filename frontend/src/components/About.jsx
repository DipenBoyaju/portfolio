import { CornerDownRight, CornerRightDown } from "lucide-react"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] overflow-hidden md:pt-10" id="about">
      <div className="p-10 md:p-20 lg:grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <p className="text-lg font-semibold uppercase text-zinc-700 dark:text-zinc-100 flex gap-2 items-center">About Me <CornerDownRight className="hidden md:block" /><CornerRightDown className="md:hidden" /></p>

        </div>
        <div className="col-span-10 pt-5 md:pt-0">
          <motion.h1 initial={{ y: 50 }} animate={isInView ? { y: 0 } : { y: 50 }} transition={{ ease: "linear", duration: 1.5 }} className="font-archivo text-2xl md:text-5xl uppercase font-semibold text-zinc-900 dark:text-zinc-50">Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality.</motion.h1>
          <motion.div className="md:grid grid-cols-2 justify-between gap-10 font-poppins text-zinc-600 pt-5 md:pt-10 dark:text-zinc-300" initial={{ y: 50 }} animate={isInView ? { y: 0 } : { y: 50 }} transition={{ ease: "linear", duration: 2, delay: 0.5 }}>
            <p>Hi there! I’m Dipen Boyaju, a web developer with a passion for crafting exceptional digital experiences. I specialize in building custom web applications that are both visually appealing and highly functional, with a focus on delivering seamless user experiences.</p>
            <p className="pt-4 md:pt-0">I leverage the power of the MERN stack (MongoDB, Express.js, React, Node.js) to create scalable and efficient solutions tailored to your needs. My expertise extends to designing responsive, dynamic, and user-friendly websites using modern technologies such as JavaScript, HTML5, and CSS3, ensuring that each project is cutting-edge and performance-driven.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default About