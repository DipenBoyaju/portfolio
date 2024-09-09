import { motion, useScroll } from 'framer-motion';

const ScrollY = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="">
      <div className="fixed top-36 md:top-[30%] -left-9 md:-left-7 flex items-center flex-col gap-14">
        <span className="text-zinc-500 text-sm font-normal -rotate-90 whitespace-nowrap font-archivo uppercase dark:text-zinc-300">
          Scroll to Top
        </span>
        <div className="relative w-[2px] h-28 bg-zinc-300 dark:bg-zinc-700 origin-top-left rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-[2px] h-28 bg-zinc-800 dark:bg-zinc-100 origin-top-left rounded-full"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>
    </div>
  )
}
export default ScrollY