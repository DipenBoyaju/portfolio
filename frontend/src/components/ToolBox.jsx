import { FaGitAlt, FaReact } from "react-icons/fa"
import { GrNode } from "react-icons/gr"
import { IoLogoCss3 } from "react-icons/io"
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiHtml5, SiMongodb } from "react-icons/si"
import IconCard from "./IconCard"
import { useAnimationFrame, useMotionValue, useTransform, motion, useScroll, useVelocity, useSpring } from "framer-motion"
import { useRef } from "react"
import { wrap } from "@motionone/utils"


const ToolBox = ({ baseVelocity }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 40;

    // Update the baseX value based on the moveBy calculation.
    baseX.set(baseX.get() + moveBy);

    // Adjust direction based on the velocity factor.
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
  });

  // Define the transform for the motion.div using the updated baseX value.
  const x = useTransform(baseX, (v) => `${wrap(-109, 0, v)}%`);

  return (
    <div className="overflow-hidden">
      <div className="">
        <motion.div className="flex gap-5 whitespace-nowrap flex-nowrap" style={{ x }}>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-5 flex-nowrap whitespace-nowrap">
              <IconCard Icon={SiHtml5} color="#ff5733" label="HTML5" />
              <IconCard Icon={IoLogoCss3} color="#264de4" label="CSS3" />
              <IconCard Icon={RiJavascriptFill} color="#f0db4f" label="JavaScript" />
              <IconCard Icon={RiTailwindCssFill} color="#38BDF8" label="Tailwind CSS" />
              <IconCard Icon={FaReact} color="#61dbfb" label="React" />
              <IconCard Icon={GrNode} color="#3c873a" label="NodeJS" />
              <IconCard Icon={SiExpress} color="#000" label="Express" />
              <IconCard Icon={SiMongodb} color="#3fa037" label="MongoDB" />
              <IconCard Icon={FaGitAlt} color="#f1502f" label="Git" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
export default ToolBox 