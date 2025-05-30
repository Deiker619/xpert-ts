import { Particles } from "@/components/magicui/particles";
import { motion } from "motion/react";

export const MisionVision = () => {
  return (
    <>
      <section className="w-full flex flex-col h-auto py-2 relative">
        <div className="absolute w-70 h-52 bg-gray-900 blur-[160px] opacity-40 inset-y-0 left-0 -z-1"></div>
        <div className="grid grid-cols-12 gap-3 h-full ml-6 mr-6">
          <div className="col-span-12 h-130 bg-white rounded-2xl flex flex-col overflow-hidden relative">
            <div style={{backgroundImage: "url('img/home/fondo.png')",}} className="flex flex-col justify-center items-end w-full h-full p-2 bg-center bg-cover bg-no-repeat">
              <div  className="relative flex h-full w-[60%] flex-col ml-6 justify-center overflow-hidden rounded-lg  ">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-"
                >
                  Misión
                </motion.span>
                <Particles
                  className="absolute inset-0 z-0 h-full"
                  quantity={100}
                  ease={80}
                  color={"#455fac"}
                  refresh
                />
                
                <div className="flex flex-col z-1">
                  <p className="text-gray-900 text-lg p-4 text-center">
                    Empoderamos a profesionales y empresas a través de una
                    formación accesible, innovadora y de alta calidad, alineada
                    con las demandas del mercado global. Mediante cursos,
                    talleres y asesoría especializada en tecnología y
                    metodologías ágiles, facilitamos el desarrollo de
                    habilidades clave para la transformación digital. Nos
                    enfocamos en la formación práctica y aplicable, fomentando
                    el aprendizaje continuo y el crecimiento sostenible de
                    personas y organizaciones en el mundo hispanohablante y más
                    allá.
                  </p>
                </div>
              </div>
              <img src="img/home/logoazuprueba.png" className="absolute inset-y-0 -left-80  h-full opacity-40" alt="algo"  />

            </div>
            
          </div>
          <div className="col-span-12 h-130 bg-white rounded-2xl flex flex-col overflow-hidden relative">
            
            <div style={{backgroundImage: "url('img/home/10302.jpg')",}} className="flex flex-col justify-center items-start w-full h-full p-2 bg-center bg-cover bg-no-repeat">
              <div  className="relative flex h-full w-[60%] flex-col ml-6 justify-center overflow-hidden rounded-lg  ">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-[white] from-white"
                >
                  Visión
                </motion.span>
                <Particles
                  className="absolute inset-0 z-0 h-full"
                  quantity={100}
                  ease={80}
                  color={"#ffffff"}
                  refresh
                />
                
                <div className="flex flex-col z-1">
                  <p className="text-white text-lg p-4 text-center">
                    Ser la plataforma líder en formación y consultoría para el
                    mundo hispanohablante, impulsando la transformación digital
                    a nivel global. Aspiramos a revolucionar la educación
                    profesional con metodologías innovadoras, accesibles y de
                    alto impacto, preparando a generaciones de especialistas que
                    lideren el futuro de la tecnología y los negocios. Rompemos
                    barreras geográficas y lingüísticas, creando oportunidades
                    para todos.
                  </p>
                </div>
              </div>
              <img src="img/home/logonaranjaprueba.png" className="absolute inset-y-0 -right-80  h-full opacity-40" alt="algo"  />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
