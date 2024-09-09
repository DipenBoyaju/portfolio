import { useNavigate } from "react-router-dom"
import projectData from "../utils/projectData"

const Portfolio = () => {
  const nav = useNavigate();
  return (
    <div className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] p-10 md:p-20">
      <div className="">
        <h1 className="font-archivo text-4xl md:text-8xl mt-10 text-center uppercase dark:text-zinc-50">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 flex-wrap">
        {
          projectData.projects.map((item) => (
            <span className="bg-zinc-600 w-full  md:h-80 lg:h-96 h-80 rounded-[35%] hover:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden border-[8px] dark:border-orange-600 border-zinc-200 shadow-lg relative group" key={item.id} onClick={() => nav(`/project/${item.id}/${item.title}`)}>
              <span className="h-full w-full inset-0  absolute transition-all duration-500 dark:hover:bg-[rgba(245,113,25,0.2)] hover:backdrop-blur-sm">
                <p className="dark:bg-orange-600 bg-zinc-100 rounded-full absolute mx-auto text-xl scale-0 group-hover:scale-105 transition-all duration-700 md:left-[30%] left-[40%] h-32 w-32 flex justify-center items-center top-1/4 dark:text-zinc-100 text-zinc-700">View</p>
              </span>
              <img src={item.bannerImage} alt="" />
              <p className="dark:bg-orange-600 bg-zinc-300 absolute bottom-0 dark:text-zinc-50 text-zinc-900 w-full items-center flex justify-center py-4 font-poppins font-thin text-2xl">{item.title}</p>
            </span>
          ))
        }
      </div>
    </div>
  )
}
export default Portfolio