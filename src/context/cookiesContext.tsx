import {  createContext, useContext } from "react";

import { useCookies } from "@/hooks/useCookies";

interface cookiesContextProps {
    getCookies: ()=>boolean,
    setCookies: ()=>void,
    LoadModalCookie: ()=>void
}

const cookiesContext = createContext<cookiesContextProps | null>(null)

export const CookiesProvider = ({ children }: { children: React.ReactNode }) =>{
    const { getCookies, setCookies, LoadModalCookie} = useCookies();
    return (
        <cookiesContext.Provider value={{ getCookies, setCookies, LoadModalCookie}}>{children}</cookiesContext.Provider>
    )
}
export const useCookieContext = () => {
  const context = useContext(cookiesContext);
  if (!context) {
    throw new Error("useCookieContext debe usarse dentro de <CookiesProvider>");
  }
  return context;
};