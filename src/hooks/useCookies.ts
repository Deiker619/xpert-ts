import { toast } from "sonner";

export const useCookies = () => {
  const setCookies = () => {
    localStorage.setItem("algo", "123456");
  };

  const getCookies = () => {
    const cookie = localStorage.getItem("algo");
    if (!cookie) {
      return false;
    }
    return true;
  };

  const LoadModalCookie = () => {
    toast("Preferencias de cookies", {
      duration: Infinity,
      icon: "🚀",
      dismissible: false,
      description:
        "Utilizamos cookies para brindarte la mejor experiencia posible y analizar el uso del sitio.",
      action: {
        label: "De acuerdo",
        onClick: () => setCookies(),
      },
    });
  };

  return { getCookies, setCookies, LoadModalCookie };
};
