import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { Loader } from 'lucide-react'
import SentMailNotify from "./SentMailNotify";

const GetInTouch = ({ setShowContact }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await axios.post('https://portfolio-backend-xi-six.vercel.app', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.data.success === true) {
        console.log(response.data.message);
        setIsLoading(false);
        setFormData({ name: '', email: '', description: '' })
        setNotificationVisible(true);
        setTimeout(() => {
          setNotificationVisible(false);
        }, 1500);

      }

    } catch (error) {
      console.error('Error sending email:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowContact((prev) => !prev);
    }, 600);
  };


  return (
    <div className="backdrop-blur-md bg-[#1116] h-screen w-full fixed z-50 top-0 left-0 transition overflow-hidden">
      <div className={`bg-[#E3E0DE] dark:bg-[rgba(10,0,0,0.9)] py-10 px-8 rounded-[2rem] flex flex-col w-[92vw] right-2 md:w-[40vw] mt-2 absolute transition-all duration-500 z-50 ${showForm ? "translate-x-0 transition-all duration-500" : "translate-x-full transition-all duration-500"
        } duration-500 transition ease-in-out`}>
        <div className="flex flex-row justify-between gap-16 md:gap-24 items-center">
          <span className="text-3xl md:text-[2.5rem] font-semibold font-archivo dark:text-zinc-50">
            Hello, I’d love to
            hear from you!
          </span>
          <span className="border-2 border-zinc-600 dark:border-zinc-300 dark:text-zinc-300 rounded-full p-3 top-6 cursor-pointer hover:text-red-400 hover:border-red-400 dark:hover:text-red-400 dark:hover:border-red-400 transition-all duration-300 hover:rotate-90" onClick={handleClose}><RxCross2 className="text-2xl" /></span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="flex flex-col gap-3">
            <label className="font-semibold font-poppins text-zinc-800 dark:text-zinc-300">Name</label>
            <input type="text" className="h-[60px] rounded-lg px-4 font-poppins dark:bg-[#180a0a] dark:text-zinc-300" name="name" value={formData.name} onChange={handleChange} placeholder="ex. John Doe" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold font-poppins text-zinc-800 dark:text-zinc-300">Email</label>
            <input type="email" className="h-[60px] rounded-lg px-4 font-poppins dark:bg-[#180a0a] dark:text-zinc-300" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold font-poppins text-zinc-800 dark:text-zinc-300">Description</label>
            <textarea rows="5" className="rounded-lg px-4 font-poppins py-2 dark:bg-[#180a0a] dark:text-zinc-300" name="description" value={formData.description} onChange={handleChange} placeholder="I need help with..." />
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-normal tracking-wider dark:bg-[rgba(30,0,0,0.9)] dark:hover:bg-[rgba(20,0,0,0.9)] transition-all duration-500 w-64" type="submit">{
            isLoading ? <Loader className="animate-spin text-center" /> : 'Send Message'
          }</button>
        </form>
      </div>
      {notificationVisible && <SentMailNotify />}
    </div>
  )
}
export default GetInTouch