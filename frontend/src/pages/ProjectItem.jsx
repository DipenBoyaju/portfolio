import { CornerDownRight, CornerRightDown, MoveUpRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import projectData from '../utils/projectData';

const ProjectItem = () => {
  const { id } = useParams()
  const project = projectData.projects.find((item) => item.id === parseInt(id))
  return (
    <div className="bg-[rgba(178,206,243,0.2)] dark:bg-[rgba(10,0,0,0.9)] p-10 md:p-20">
      <div className=" mt-20">
        <div className="w-2/3 mx-auto text-center">
          <h1 className="font-archivo text-4xl md:text-8xl font-bold uppercase dark:text-zinc-50">{project.title}</h1>
          <p className="font-poppins text-zinc-600 pt-5 dark:text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis molestiae deleniti inventore natus ipsum officiis cumque aspernatur modi praesentium.</p>
        </div>
        <div className="flex items-center justify-center gap-10 font-poppins py-10">
          <Link to={project.url} target="_blank" className="text-zinc-800 flex items-center gap-2 cursor-pointer underline-offset-8 underline hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-400 transition-all duration-500">View Live Website<MoveUpRight size={18} /></Link>
        </div>
      </div>
      <div className="w-full h-[60vw] md:h-[90vh] bg-zinc-800 rounded-3xl overflow-hidden relative">
        <img src={project.bannerImage} alt="" className="w-full hover:scale-105 cursor-pointer transition-all duration-500" />
        <span className="flex flex-row gap-2 absolute bottom-5 left-5 flex-wrap">
          {
            project.tools.map((item, index) => (
              <p key={index} className="bg-zinc-50 border border-zinc-900 uppercase font-poppins text-sm py-1 px-3 rounded-full dark:bg-zinc-900 dark:text-zinc-400">{item}</p>
            ))
          }
        </span>
      </div>

      <div className="pt-10 lg:grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <p className="text-lg font-semibold uppercase text-zinc-700 dark:text-zinc-100 flex gap-2 items-center">Project Details <CornerDownRight className="hidden md:block" /><CornerRightDown className="md:hidden" /></p>

        </div>
        <div className="md:col-span-9 pt-5 md:pt-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-32 border-b pb-5">
            <span>
              <h4 className="font-archivo uppercase dark:text-zinc-200 ">Category</h4>
              <p className="font-poppins text-zinc-700 dark:text-zinc-400">{project.category}</p>
            </span>
            <span>
              <h4 className="font-archivo uppercase dark:text-zinc-200">Client</h4>
              <p className="font-poppins text-zinc-700 dark:text-zinc-400">-</p>
            </span>
            <span>
              <h4 className="font-archivo uppercase dark:text-zinc-200 ">Year</h4>
              <p className="font-poppins text-zinc-700 dark:text-zinc-400">2024</p>
            </span>
          </div>
          <div className="grid md:grid-cols-2 pt-10">
            <div className="">
              <h3 className="uppercase font-archivo text-xl text-zinc-900 font-semibold dark:text-zinc-100">Overview</h3>
              <p className="font-poppins text-zinc-500 text-md dark:text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, vero eius! Eaque animi corporis ut distinctio voluptatem voluptate quidem. Quis fuga placeat quam. Amet sint dolore, id sunt eligendi quisquam eos enim aspernatur commodi nemo officiis iste aut fugit repellat! Numquam, inventore debitis cumque eius excepturi consectetur molestiae beatae voluptate.Suscipit, eaque expedita!</p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectItem