
import { Button } from "../ui/button";



interface headerProps {
  titleHeader: string,
  descriptionHeader: string,
  bgHeader: string,
  messageHeader?: string
}

export const Header = ({ titleHeader, descriptionHeader, bgHeader }: headerProps) => {
  return (
    <>
      <div className="bg-white  overflow-hidden ">
        <section
          id="background_header"
          style={{ backgroundImage: bgHeader }}
          className="bg-center relative  bg-no-repeat bg-cover bg-blend-multiply h-120 md:h-[460px]"
        >
          <div className="absolute top-0  left-0 w-full h-full z-1 bg-gradient-to-r  from-secondary opacity-50"></div>
          {/* <!-- Contenedor inferior derecha --> */}


          <div className="px-4 z-2  grid grid-cols-2  mx-auto  text-start py-28 lg:pt-15 relative overflow-hidden">


            <div className="flex flex-col w-full  gap-3 p-3">
              <div className="flex flex-col gap-2">
                
                  <h1
                    id="title_header"
                    className="text-2xl font-extralight tracking-tight leading-none text-primary md:text-2xl lg:text-lg flex flex-col"
                  >
                    {titleHeader}
                  </h1>
                
                
                  <h2
                    id="subtitle_header"
                    className="font-normal text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-5xl flex flex-col"
                  >
                    {descriptionHeader}
                  </h2>
                

              </div>
              {/* Descripcion */}
              <div className="p-1">
                <Button className="p-4">Quiero saber mas</Button>
              </div>
            </div>





          </div>
        </section>
      </div>
    </>
  );
};
