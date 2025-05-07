// components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/nav";
import { Footer } from "../components/Footer/Footer";
import { Ruta } from "../interfaces/Ruta";
const pages: Ruta[] = [
  {
    name: "home",
    url: "/",
    state: false,
  },
  {
    name: "Quienes somos",
    url: "/about",
    state: false,
  },
];
export const Menu = () => {
  return (
    <>
      <Nav Rutas={pages}></Nav>

      <main className="mt-20">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};
