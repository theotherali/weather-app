import './App.css'
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  
  const router = useRoutes(routes);

  return (
    <ThemeProvider>
    {router}
    </ThemeProvider>
  )
}

export default App
