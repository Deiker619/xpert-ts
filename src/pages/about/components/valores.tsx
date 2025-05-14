import { motion } from "motion/react";

export const Valores = () => {
  return (
    <section className="  flex flex-col justify-center items-center w-full h-auto">
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-[#167FA6] from-"
      >
        Valores
      </motion.span>
      <div className="flex flex-col justify-center items-center  w-full h-full gap-4 ">
        <div className="grid grid-cols-4 w-full p-4 gap-4">
          <div className="col-span-4 md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-gray-900 rounded-2xl h-50 w-60 relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16  -top-4 left-[34%]   rounded-full">
                <img src="img/about/valores/etica.png" alt="" />
              </div>

              <div className="p-2 flex justify-center items-center w-full ">
                <p className="mt-11 text-md font-semibold">
                  Ética y Responsabilidad{" "}
                </p>
              </div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="text-sm font-normal text-center">
                  Actuamos con integridad y transparencia, construyendo
                  confianza con clientes y aliados.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-gray-900 rounded-2xl h-50 w-60 relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-[34%]   rounded-full">
                <img
                  src="img/about/valores/excelencia.png"
                  className=""
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full ">
                <p className="mt-11 text-md font-semibold">
                  Excelencia y Calidad{" "}
                </p>
              </div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="text-sm font-normal text-center">
                  Compromiso con la formación de alto nivel, alineada con la
                  industria y las mejores prácticas globales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-gray-900 rounded-2xl h-50 w-60 relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16 -top-4 left-[34%]   rounded-full">
                <img
                  src="img/about/valores/innovacion.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full ">
                <p className="mt-11 text-md font-semibold">
                  Innovación y Adaptabilidad{" "}
                </p>
              </div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="text-sm font-normal text-center">
                  Educación basada en tendencias tecnológicas y metodologías
                  ágiles para un aprendizaje relevante.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
            <div className="bg-white border border-gray-900 rounded-2xl h-50 w-60 relative shadow-lg">
              <div className="absolute bg-white  h-16 w-16  -top-4 left-[34%] rounded-full">
                <img
                  src="img/about/valores/liderazgo.png"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="p-2 flex justify-center items-center w-full ">
                <p className="mt-11 text-md font-semibold">
                  Transformación Digital{" "}
                </p>
              </div>
              <div className=" flex justify-center items-center w-full p-3 ">
                <p className="text-sm font-normal text-center">
                  Impulsamos la digitalización como motor de cambio, preparando
                  a líderes para afrontar los retos del futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
