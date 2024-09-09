import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RootLayout from "./layout/RootLayout"
import PageLoader from "./components/PageLoader"
import { useEffect, useState } from "react"
import ProjectItem from "./pages/ProjectItem"
import Portfolio from "./pages/Portfolio"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
    }, 2500);

    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/project/:id/:title', element: <ProjectItem /> },
        { path: '/portfolio', element: <Portfolio /> },
      ]
    }
  ])

  return loading ? <PageLoader exiting={exiting} /> : <RouterProvider router={router} />
}
export default App