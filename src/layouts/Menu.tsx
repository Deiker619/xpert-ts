// components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/nav";
import { Footer } from "../components/Footer/Footer";
import { pages } from "@/components/routes/Rutas"; 
import { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { useCookieContext } from "@/context/cookiesContext";



export const Menu = () => {
  const { getCookies, LoadModalCookie } = useCookieContext()
  useEffect(() => {
    if (!getCookies()) LoadModalCookie();
  });
  return (
    <>
      <Nav Rutas={pages}></Nav>
      <main className="mt-17">
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
