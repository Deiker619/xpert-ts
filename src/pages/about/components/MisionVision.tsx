import { Particles } from "@/components/magicui/particles";
import { motion } from "motion/react";

export const MisionVision = () => {
  return (
    <>
      <section className="w-full flex flex-col h-[400px] py-2 relative">
        <div className="absolute w-70 h-52 bg-gray-900 blur-[160px] opacity-40 inset-y-0 left-0 -z-1"></div>
        <div className="grid grid-cols-12 gap-3 h-full ml-6 mr-6">
          <div className="col-span-6 bg-white rounded-2xl flex flex-col overflow-hidden relative">
            <div className="absolute w-30 h-30 rounded-full backdrop-blur-2xl z-1  top-0 right-0">
              <img
                src="img/about/mision.svg"
                className="h-full w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col w-full h-full p-2">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
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
                  color={"#167FA6"}
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
            </div>
          </div>
          <div className="col-span-6 bg-white rounded-2xl flex flex-col overflow-hidden relative">
            <div className="absolute w-30 h-30 rounded-full  z-1  top-0 right-0">
              <img
                src="img/about/vision.svg"
                className="h-full w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col w-full h-full p-2">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-[white] from-"
                >
                  Visión
                </motion.span>
                <Particles
                  className="absolute inset-0 z-0 bg-gray-900"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
