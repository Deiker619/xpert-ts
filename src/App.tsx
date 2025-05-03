import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About"
import { Menu } from "./layouts/Menu"

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
