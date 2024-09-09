import { Moon, Sun } from "lucide-react"
import { useEffect } from "react"

const DarkTheme = ({ theme, onThemeChange }) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    onThemeChange(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, [onThemeChange]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    onThemeChange(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  }
  return (
    <div className={` ${theme === 'light' ? 'bg-[#0C0202] hover:bg-zinc-700 ' : 'bg-zinc-100 hover:bg-zinc-300'} fixed right-0 top-32 z-30 py-3 pl-4 cursor-pointer pr-2 rounded-l-full transition-all duration-500`} onClick={toggleTheme} style={{ color: theme === 'light' ? 'white' : 'black' }}>{theme === "light" ? <Moon color="black" /> : <Sun color="white" />}</div>
  )
}
export default DarkTheme