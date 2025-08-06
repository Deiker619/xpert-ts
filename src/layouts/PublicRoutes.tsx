import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

const Services = React.lazy(() => import("../pages/Services/Services"));
const Home = React.lazy(() => import('../pages/Home/Home'));
const Menu = React.lazy(() => import('./Menu'));
const About = React.lazy(() => import('../pages/about/About'));
const Contact = React.lazy(() => import('../pages/Contact/Contact'));
import { Education } from "../pages/education/education";

export default function PublicRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
