import { ShinyButton } from "@/components/magicui/shiny-button";

export const IntroSection = () => {
  return (
    <>
      <section className="bg-[#f0f0eb] mr-6 ml-6 rounded-2xl mt-6">
        <div className="grid place-items-center px-4 mx-auto xl:gap-0 lg:py-16 lg:px-8 lg:grid-cols-12">
          <div className="mr-auto container flex flex-col justify-center items-center md:items-start md:justify-start lg:col-span-7">
            <div className="p-6 md:p-0">
              <h2 className="w-full mb-4 text-xl text-center  tracking-tight md:text-start md:text-6xl xl:text-4xl">
                Ofrecemos soluciones <br />
                <span className="text-primary font-medium">
                  tecnológicas integrales
                </span>
              </h2>
              <p className="w-full mb-6 font-light text-gray-500 text-center lg:mb-8 md:text-lg md:text-start lg:text-xl">
                Somos una compañía de Servicios y Soluciones Tecnológicas, con
                más de 25 años de trayectoria en el mercado venezolano,
                Latinoamericano y el Caribe
              </p>

              <ShinyButton className="bg-primary flex w-full md:w-auto justify-center items-center">Ver servicios</ShinyButton>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <div className="absolute w-52 h-40 -z-0 bg-blue-300 blur-[120px] bottom-0 left-0"></div>

            <figure className="max-w-lg relative">
              <img
                className="h-auto max-w-full rounded-lg"
                src="img/expertos.jpg"
                alt="image description"
              />
              <div className="absolute right-10 bottom-0 w-20 h-16 rounded-2xl z-1 bg-[#f0f0eb]">
                {/* <!-- viñeta para redondear --> */}
                {/* <!-- Message header --> */}
                <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent z-20 overflow-hidden">
                  <div className="rounded h-full w-full absolute z-20 p-1">
                    <div className="w-full h-full rounded-lg backdrop-blur-lg flex fle-col justify-center items-center p-2"></div>
                  </div>
                </div>

                {/* <!-- viñeta para redondear --> */}
                <div className="absolute bottom-0 left-[-48px] size-16 w-12 h-12 bg-transparent rotate-[-4deg] rounded-lg pointer-events-none">
                  <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_#f0f0eb]"></div>
                </div>
                <div className="absolute -right-12 bottom-0 size-16 w-12 h-12 bg-trasparent rotate-[-270deg] rounded-lg pointer-events-none">
                  <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_#f0f0eb]"></div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
