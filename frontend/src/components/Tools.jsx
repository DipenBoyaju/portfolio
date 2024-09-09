import ToolBox from "./ToolBox"

const Tools = () => {
  return (
    <div className="bg-[rgb(15,15,39)] dark:bg-[#0C0202] py-10 space-y-6">
      <ToolBox baseVelocity={0.3} />
      <ToolBox baseVelocity={-0.3} />
    </div>
  )
}
export default Tools