import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Slider = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-[80%] flex flex-col mx-auto my-4 h-70"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-20 w-20 -top-4 left-5  rounded-full">
                <img
                  src="img/services/ibm.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Análisis de rendimiento/Capacidad en plataformas: IBM Power
                  System, Oracle,Dell y HP.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/basedatos.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Estudio de salud de base de datos: DB2,Oracle,SQL Server, MySQL.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/seguridad.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Evaluación de Seguridad en plataformas: IBM Power System(AIX,Linux e IBM i), Oracle, Cisco, Sophos, Windows.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/lupa.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Test de intrusión y Análisis de Vulnerabilidades.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/arquitectura.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Arquitectura Tecnologica

                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/redes.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                  Diseño de Soluciones de Infraestructura de Redes.

                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
          <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-5  rounded-full">
                <img
                  src="img/services/ambiente.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full "></div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="mt-11 text-md text-center">
                   Diseño e Implementación de ambientes en alta capacidad (Hardware, Discos Independientes, Aplicaciones)

                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
