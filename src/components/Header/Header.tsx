import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
export const Header = () => {
  return (
    <>
      <div className="bg-white  mr-6 ml-6 mb-6 rounded-2xl border-gray-400 overflow-hidden p-2">
        <section
          id="background_header"
          style={{ backgroundImage: "url('img/bg.jpg')" }}
          className="bg-center relative rounded-2xl bg-no-repeat bg-cover bg-blend-multiply h-[500px]"
        >
          <div className="absolute top-0 rounded-2xl left-0 w-full h-full z-1 bg-gradient-to-r to-emerald-600 from-sky-400 opacity-50"></div>
          {/* <!-- Contenedor inferior derecha --> */}
          <div className="absolute right-22 bottom-0 w-72 h-24 rounded-2xl z-10 bg-white">
            {/* <!-- viñeta para redondear --> */}

            {/* <!-- Message header --> */}
            <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent overflow-hidden">
              <div className="rounded h-full w-full absolute  p-1">
                <div className="w-full h-full rounded-lg backdrop-blur-lg flex fle-col justify-center items-center p-2">
                  <InteractiveHoverButton className="">
                    Ver cursos
                  </InteractiveHoverButton>
                </div>
              </div>
            </div>

            {/* <!-- viñeta para redondear --> */}
            <div className="absolute bottom-0 left-[-48px] size-16 w-12 h-12 bg-transparent rotate-[-4deg] rounded-lg pointer-events-none">
              <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_white]"></div>
            </div>
            <div className="absolute -right-12 bottom-0 size-16 w-12 h-12 bg-trasparent rotate-[-270deg] rounded-lg pointer-events-none">
              <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_white]"></div>
            </div>
          </div>

          <div className="px-4 z-2 mx-auto max-w-screen-xl text-center py-32 lg:pt-40 relative overflow-hidden">
            <div className="mb-2">
              <h1
                id="title_header"
                className="text-4xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
              >
                Impulsa tu Carrera en lo Digital
              </h1>
              <h2
                id="subtitle_header"
                className="font-bold text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
              >
                con los mejores xpertos
              </h2>
            </div>
            <p
              id="text_header"
              className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48"
            ></p>
            <div
              id="conoce_mas"
              className="flex flex-col space-y-4 sm:justify-center sm:space-y-0 gap-8"
            >
              <div className="">
                <ShinyButton className="bg-white" >Quiero saber mas</ShinyButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
