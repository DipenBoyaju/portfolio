import { CornerRightDown } from "lucide-react"
import { useEffect, useRef } from "react"
import { useInView, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import projectData from '../utils/projectData.js'
import { useNavigate } from "react-router-dom";
import WorkCards from "./WorkCards.jsx";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const scrollRef = useRef(null);
  const nav = useNavigate();


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 2, // Controls the scrolling speed globally
    });

    return () => {
      // Clean up the scroll instance when the component unmounts
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={ref} className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] overflow-hidden" id="works">
      <div className="p-10 md:p-20 lg:grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <p className="text-lg font-semibold uppercase text-zinc-700 dark:text-zinc-200 flex gap-2 items-center">Works <CornerRightDown /></p>
        </div>
        <div className="col-span-10 pt-5 md:pt-0">
          <motion.h1 initial={{ y: 50 }} animate={isInView ? { y: 0 } : { y: 50 }} transition={{ ease: "linear", duration: 1.5 }} className="font-archivo text-2xl md:text-5xl uppercase font-semibold text-zinc-900 dark:text-zinc-100">Explore the projects below to see how I transform ideas into reality with innovative design and precise execution.</motion.h1>
        </div>
      </div>
      <div data-scroll-section data-scroll className="grid md:grid-cols-2 md:gap-10 px-10 md:px-20">
        {
          projectData.projects.map((item, index) => (
            // <WrokCard item={item} key={index} />
            <WorkCards item={item} key={index} />
          ))
        }
      </div>
      <div onClick={() => nav('/portfolio')} className="text-center pt-10 pb-5">
        <span className="p-5 bg-[rgb(15,15,39)] px-10 rounded-full md:text-3xl uppercase font-archivo text-white hover:bg-[rgb(41,41,90)] transition-all duration-500 cursor-pointer dark:bg-[rgba(10,0,0,0.9)] dark:hover:bg-[rgba(10,0,0,0.6)]">Discover all the Works</span>
      </div>
    </div>
  )
}
export default Works