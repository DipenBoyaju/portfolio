import { MoveUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const WrokCard = ({ item }) => {
  const nav = useNavigate();
  return (
    <div data-scroll data-scroll-speed={item.speed} className="rounded-3xl overflow-hidden group relative" onClick={() => nav(`/project/${item.id}/${item.title}`)}>
      <div className="w-full h-64 md:h-96 bg-zinc-500 transition-all duration-700 relative overflow-hidden cursor-pointer">
        <p className="font-poppins text-5xl absolute z-20 font-bold pl-10 uppercase mt-14 hidden justify-center items-center group-hover:flex transition-all duration-500 text-white underline-offset-8 underline">{item.title}</p>
        <div
          className="absolute z-10 inset-0 bg-[rgba(10,0,0,0.3)] scale-0 group-hover:scale-100 origin-center transition-transform duration-700 ease-in-out rounded-3xl"
        ></div>
        <img src={item.bannerImage} alt="" className="inset-0 w-full h-auto group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="bg-[#ebebeb] dark:bg-[#0C0202] p-6 group-hover:absolute group-hover:-translate-y-48 group-hover:w-full group-hover:h-full transition-all duration-500 z-30 cursor-pointer">
        <div className="group-hover:hidden flex flex-row justify-between items-center">
          <div className="">
            <h5 className="font-archivo text-zinc-900 uppercase font-semibold text-2xl dark:text-zinc-100">{item.title}</h5>
            <p className="dark:text-zinc-400">{item.category}</p>
          </div>
          <button className="bg-white text-zinc-800 p-4 rounded-full hover:bg-red-400 transition-all duration-500 hover:text-white hover:rotate-45 "><MoveUpRight size={28} /></button>
        </div>
        <span className="hidden group-hover:block pt-10">
          <p className="font-poppins text-xl w-2/3 dark:text-zinc-300">{item.detail.slice(0, 90)}...</p>
          <button className="bg-white text-zinc-800 p-4 rounded-full mt-10 hover:bg-red-400 transition-all duration-500 hover:text-white hover:rotate-45 "><MoveUpRight size={28} /></button>
        </span>
      </div>
    </div>
  )
}
export default WrokCard