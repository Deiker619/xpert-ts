

import { ShinyButton } from "@/components/magicui/shiny-button";
interface headerProps {
  titleHeader: string,
  descriptionHeader: string,
  bgHeader: string,
  messageHeader?: string
}
export const Header = ({ titleHeader, descriptionHeader, bgHeader }: headerProps) => {
  return (
    <>
      <div className="bg-white mr-3 ml-3 md:mr-6 md:ml-6 mb-6 rounded-2xl  overflow-hidden ">
        <section
          id="background_header"
          style={{ backgroundImage: bgHeader }}
          className="bg-center relative rounded-2xl bg-no-repeat bg-cover bg-blend-multiply h-120 md:h-[460px]"
        >
          <div className="absolute top-0 rounded-2xl left-0 w-full h-full z-1 bg-gradient-to-r to-primary from-secondary opacity-50"></div>
          {/* <!-- Contenedor inferior derecha --> */}
          

          <div className="px-4 z-2 mx-auto max-w-screen-xl text-center py-32 lg:pt-40 relative overflow-hidden">
            
            <div className="mb-2">
              <h1
                id="title_header"
                className="text-4xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
              >
                {titleHeader}
              </h1>
              <h2
                id="subtitle_header"
                className="font-normal text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-7xl flex flex-col"
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
