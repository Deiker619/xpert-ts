import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Menu = React.lazy(() => import('./layouts/Menu'));
const About = React.lazy(() => import('./pages/about/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

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
