import '../Loader.css'

const PageLoader = ({ exiting }) => {
  return (
    <div
      className={`bg-zinc-900 w-full min-h-screen flex justify-center items-center loader-container ${exiting ? 'exit' : ''
        }`}
    >
      <div className="loader"></div>
    </div>
  )
}
export default PageLoader