import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="bg-[#202020]">
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-2">
          <div className="mb-6 md:mb-0 flex justify-center col-span-2 md:col-span-1">
            <a href="index.html" className="flex">
              <img
                src="img/logo.png"
                className="h-16 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 col-span-2 md:col-span-1">
            <div className="col-span-1">
              <ul className="text-gray-500 font-xs">
                <li className="mb-1 flex gap-4 items-center">
                  <InstagramLogoIcon className="size-9"></InstagramLogoIcon>
                  <a
                    href="about.html"
                    className="text-white opacity-40 font-sm hover:text-white hover:opacity-100"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-1 flex gap-4">
                  <LinkedInLogoIcon className="size-9"></LinkedInLogoIcon>
                  <a
                    href="soluciones.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-1 flex gap-4">
                  <TwitterLogoIcon className="size-9"></TwitterLogoIcon>
                  <a
                    href="servicios.html"
                    className="text-white opacity-40 font-xs hover:text-white hover:opacity-100"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <p className="w-full text-white opacity-40 font-xs hover:text-white hover:opacity-100">
                Barrio Prosperidad, Chamartín, Madrid, 28002.
              </p>
              <p className="w-full text-white opacity-40 font-xs hover:text-white hover:opacity-100">
                Correo Electrónico: Info@bytescxpert.com
              </p>
              <p className="w-full text-white opacity-40 font-xs hover:text-white hover:opacity-100">
                Teléfono: +34-655-62-30-40.
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
              ></a>
            </div>

            <div className="">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bytes-creativos/"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
