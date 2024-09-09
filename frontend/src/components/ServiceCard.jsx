import { MoveUpRight } from "lucide-react"

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="bg-zinc-200 dark:bg-[rgba(10,0,0,0.7)] rounded-lg p-4 md:p-7 flex flex-col gap-10 cursor-pointer hover:bg-white dark:hover:bg-white  hover:shadow-2xl group w-full">
      <span className="bg-white dark:bg-zinc-900  p-2 rounded-full text-xl h-12 w-12 items-center flex justify-center shadow-lg  group-hover:bg-zinc-100 dark:group-hover:text-zinc-700 dark:text-zinc-400 text-zinc-600">
        {icon}
      </span>
      <div className="flex justify-between items-end gap-2 dark:text-zinc-300 dark:group-hover:text-zinc-800">
        <p className="font-archivo text-xl">{title}</p>
        <MoveUpRight size={22} />
      </div>
    </div>
  )
}
export default ServiceCard