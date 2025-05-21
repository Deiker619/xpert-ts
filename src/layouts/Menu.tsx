// components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/nav";
import { Footer } from "../components/Footer/Footer";
import { Ruta } from "../interfaces/Ruta";
import { Suspense } from "react";

import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
const pages: Ruta[] = [
  {
    name: "Home",
    url: "/",
    state: false,
  },
  {
    name: "Quienes somos",
    url: "/about",
    state: false,
  },
  {
    name: "Contactenos",
    url: "/contact",
    state: false,
  },
];
export const Menu = () => {
  return (
    <>
      <Nav Rutas={pages}></Nav>

      <main className="mt-20">
        <Suspense fallback={<SkeletonCard></SkeletonCard>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </>
  );
};
export default Menu