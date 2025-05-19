import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Menu } from "./layouts/Menu"
import { About } from "./pages/about/About"
import { Contact } from "./pages/Contact/Contact"

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/contact" element={<Contact></Contact>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
