import { BrowserRouter } from "react-router-dom"
import { CookiesProvider } from "./context/cookiesContext";
import { ThemeProvider } from "./context/themeContext";
import PublicRoutes from "./layouts/PublicRoutes";

function App() {


  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <CookiesProvider>
            <PublicRoutes/>
          </CookiesProvider>
        </ThemeProvider>



      </BrowserRouter>
    </>
  )
}

export default App
