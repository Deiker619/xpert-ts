// components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/nav";
import { Footer } from "../components/Footer/Footer";
import { Ruta } from "../interfaces/Ruta";
import { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { useCookieContext } from "@/context/cookiesContext";


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
    name: "Servicios",
    url: "/services",
    state: false,
  },
  {
    name: "Contáctanos",
    url: "/contact",
    state: false,
  },
];
export const Menu = () => {
  const { getCookies, LoadModalCookie } = useCookieContext()
  useEffect(() => {
    if (!getCookies()) LoadModalCookie();
  });
  return (
    <>
      <Nav Rutas={pages}></Nav>
      <main className="mt-20">
        <Suspense fallback={<SkeletonCard></SkeletonCard>}>
          <Outlet />
        </Suspense>

        <Toaster position="bottom-right" />
      </main>
      <Footer></Footer>
    </>
  );
};
export default Menu;
