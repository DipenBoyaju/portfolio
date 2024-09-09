import { CheckCheck } from "lucide-react"

const SentMailNotify = () => {
  return (
    <div className="bg-zinc-50 dark:bg-[#0C0202] dark:text-zinc-50 dark:border-zinc-800 border flex flex-row items-center justify-center gap-2 md:gap-3 md:p-4 p-4 rounded-3xl md:w-[25vw] w-[50vw] mx-auto absolute z-50 top-2 right-2 shadow-lg transition-all duration-500">
      <h3 className="font-poppins text-md md:text-lg ">Message sent successfully</h3>
      <CheckCheck size={28} color="#4ade80" />
    </div>
  )
}
export default SentMailNotify