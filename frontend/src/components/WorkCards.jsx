import { MoveUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const WorkCards = ({ item }) => {
  const nav = useNavigate();
  return (
    <div data-scroll data-scroll-speed={item.speed} className="rounded-3xl overflow-hidden group dark:bg-[#1b0505] bg-[#ebebeb] p-5" onClick={() => nav(`/project/${item.id}/${item.title}`)}>
      <div className="w-full h-64 md:h-96 transition-all duration-700 overflow-clip cursor-pointer group-hover:blur-sm rounded-2xl relative">
        <img src={item.bannerImage} alt="" className="w-full h-auto group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="pt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <h5 className="font-archivo text-zinc-900 font-semibold text-2xl dark:text-zinc-100">{item.title}</h5>
            <p className="dark:text-zinc-400 font-poppins text-zinc-500">{item.category}</p>
          </div>
          <button className=" text-zinc-800 p-2 px-4 rounded-full hover:bg-red-400 transition-all duration-500 hover:text-white flex flex-row gap-2 border border-zinc-700 group-hover:bg-zinc-800 group-hover:text-zinc-100 bg-transparent dark:border-zinc-600 dark:text-zinc-400 items-center dark:bg-transparent font-poppins dark:group-hover:bg-orange-600 dark:group-hover:border-orange-600 dark:group-hover:text-zinc-100">View<MoveUpRight size={18} /></button>
        </div>
      </div>
    </div>
  )
}
export default WorkCards