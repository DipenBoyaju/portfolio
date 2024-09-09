import { useEffect } from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import LetsWork from "../components/LetsWork"
import ScrollY from "../components/ScrollY"
import TextSlide from "../components/TextSlide"
import Tools from "../components/Tools"
import WhatIDo from "../components/WhatIDo"
import Works from "../components/Works"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "../hooks/ThemeProvider"
import Services from "../components/Services"

const HomePage = () => {
  const { hash } = useLocation();
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        navigate(window.location.pathname, { replace: true });
      }
    }
  }, [hash]);

  return (
    <div>
      <Hero theme={theme} />
      <Tools />
      <About />
      <Services />
      <Works />
      <TextSlide theme={theme} />
      <LetsWork />
      <ScrollY />
    </div>
  )
}
export default HomePage