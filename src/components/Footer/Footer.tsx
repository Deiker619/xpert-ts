

export const Footer = () => {
  return (
    <footer className="bg-[#202020]">
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-2">
          <div className="mb-6 md:mb-0 flex justify-center col-span-2 md:col-span-1">
            <a href="index.html" className="flex">
              <img
                src="https://bytescreativos.net/src/img/contenido/logobytes.png"
                className="h-16 opacity-40 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 col-span-2 md:col-span-1">
            <div className="col-span-1">
              <ul className="text-gray-500 font-xs">
                <li className="mb-1">
                  <a
                    href="about.html"
                    className="text-white opacity-40 font-sm hover:text-white hover:opacity-100"
                  >
                    Quienes somos
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="soluciones.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    Soluciones
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="servicios.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    Servicios
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="asesorias.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    Asesoria
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="capacitacion.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    Capacitación
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="contacto.html"
                    className="text-white opacity-40 font-xs hover:opacity-100"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase"></h2>
              <p className="w-full text-white opacity-40 font-xs hover:text-white hover:opacity-100">
                Av. Rómulo Gallegos, Ed. Pascal Caracas - Venezuela
                info@bytescreativos.net +58 (0424) 188.5393
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          {/* <!-- redes sociales --> */}
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <a
                target="_blank"
                href="https://www.instagram.com/bytescreativos.ve/"
              >
              
              </a>
            </div>

            <div className="">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bytes-creativos/"
              >
             
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
