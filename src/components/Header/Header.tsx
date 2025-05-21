import { motion } from "motion/react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
interface headerProps {
  titleHeader: string,
  descriptionHeader: string,
  bgHeader: string,
  messageHeader: string
}
export const Header = ({ titleHeader, descriptionHeader, bgHeader, messageHeader }: headerProps) => {
  return (
    <>
      <div className="bg-white mr-3 ml-3 md:mr-6 md:ml-6 mb-6 rounded-2xl border-gray-400 overflow-hidden p-2">
        <section
          id="background_header"
          style={{ backgroundImage: bgHeader }}
          className="bg-center relative rounded-2xl bg-no-repeat bg-cover bg-blend-multiply h-[580px]"
        >
          <div className="absolute top-0 rounded-2xl left-0 w-full h-full z-1 bg-gradient-to-r to-primary from-secondary opacity-50"></div>
          {/* <!-- Contenedor inferior derecha --> */}
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 md:translate-x-0  -bottom-1 md:left-100 lg:left-210 md:right-20 md:bottom-0 md:w-72 w-60 h-24 rounded-2xl z-10 bg-white"
          >
            {/* <!-- viñeta para redondear --> */}
            {/* <!-- Message header --> */}
            <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent overflow-hidden">
              <div className="rounded h-full w-full absolute  p-1">
                <div className="w-full h-full rounded-lg backdrop-blur-lg flex fle-col justify-center items-center p-2">
                  <InteractiveHoverButton>
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
          </motion.div>

          <div className="px-4 z-2 mx-auto max-w-screen-xl text-center py-32 lg:pt-40 relative overflow-hidden">
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pe-4  text-sm text-white backdrop-blur-2xl  rounded-full "
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 me-3">
                New
              </span>{" "}
              <span className="text-sm font-medium ">
                <i>{messageHeader}</i>
              </span>
            </a>
            <div className="mb-2">
              <h1
                id="title_header"
                className="text-4xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
              >
                {titleHeader}
              </h1>
              <h2
                id="subtitle_header"
                className="font-bold text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
              >
                {descriptionHeader}
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
                <ShinyButton className="bg-primary">
                  Quiero saber mas
                </ShinyButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
