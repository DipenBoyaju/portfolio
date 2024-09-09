import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTopButton from "../components/BackToTop"
import ScrollToTop from "./ScrollToTop"
import DarkTheme from "../components/DarkTheme"
import { useTheme } from "../hooks/ThemeProvider"

const RootLayout = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <BackToTopButton />
      <DarkTheme theme={theme} onThemeChange={handleThemeChange} />
      <Footer />
    </div>
  )
}
export default RootLayout