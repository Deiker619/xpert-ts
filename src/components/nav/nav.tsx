import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Ruta } from "../../interfaces/Ruta";
import { useThemeContext } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "motion/react";

export const Nav = ({ Rutas }: { Rutas: Ruta[] }) => {
  useEffect(() => {}, [Rutas]);
  const { theme, changeTheme } = useThemeContext();
  return (
    <nav className="bg-[#1c247c] backdrop-blur-lg dark:bg-black fixed w-full z-12 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={""}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="img/xpert_logo.png"
            className="h-10 w-auto object-cover"
            alt="Flowbite Logo"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex justify-center items-center">
            <button onClick={changeTheme}>
            <AnimatePresence mode="wait">
              {theme && (
                <motion.span
                  key={theme.theme} // clave para detectar cambios
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: "inline-block" }}
                >
                  {theme.icon}
                </motion.span>
              )}
            </AnimatePresence>

            </button>
    
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            open menu
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-white border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-black md:dark:bg-black dark:border-gray-700">
            {Rutas.map((ruta) => (
              <li key={ruta.url}>
                <NavLink
                  to={ruta.url}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "hover:text-blue-500"
                  }
                >
                  {ruta.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
