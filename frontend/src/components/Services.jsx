import { CornerRightDown, MoveUpRight } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { FaLaptopCode } from "react-icons/fa"
import { IoCodeSlashOutline } from "react-icons/io5";
import { BsFileCodeFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null)

  return (
    <div ref={ref} id="service" className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] p-10 md:p-20">
      <div className="lg:grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <p className="text-lg font-semibold uppercase text-zinc-700 dark:text-zinc-200 flex gap-2 items-center">What i do <CornerRightDown /></p>
        </div>
      </div>
      <div className="grid grid-row-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-2 grid  grid-cols-2 md:grid-cols-3 gap-6">

          <ServiceCard title="Custom Website Design" icon={<AiFillCode />} />
          <ServiceCard title="Front-end Development" icon={<FaLaptopCode />} />
          <ServiceCard title="Landing Page Design" icon={<BsFileCodeFill />} />
          <ServiceCard title="E-Commerce Website" icon={<HiShoppingCart />} />
          <ServiceCard title="Back-end Development" icon={<IoCodeSlashOutline />} />
        </div>
        <div className="bg-[#080808] dark:bg-[rgba(10,0,0,0.9)] w-full h-auto rounded-xl p-8">
          <div className="flex h-full justify-between flex-col">
            <div className="text-white flex  justify-end"><MoveUpRight size={32} color="white" /></div>
            <div className="mt-auto">
              <p className="text-orange-600 font-archivo uppercase text-xl">Say Hello!</p>
              <p className="font-poppins cursor-pointer font-semibold text-xl text-zinc-50"><a href="mailto:boyaju.dipen@gmail.com">boyaju.dipen@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services