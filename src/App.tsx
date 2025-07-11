import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CookiesProvider } from "./context/cookiesContext";

import React from 'react';
import { ThemeProvider } from "./context/themeContext";
import { Education } from "./pages/education/education";
const Services = React.lazy(() => import("./pages/Services/Services"));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Menu = React.lazy(() => import('./layouts/Menu'));
const About = React.lazy(() => import('./pages/about/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {


  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <CookiesProvider>
            <Routes>
              <Route path="/" element={<Menu />}>
                <Route index element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/contact" element={<Contact></Contact>} />
                <Route path="/services" element={<Services></Services>} />
                <Route path="/education" element={<Education></Education>} />
              </Route>
            </Routes>
          </CookiesProvider>
        </ThemeProvider>



      </BrowserRouter>
    </>
  )
}

export default App
