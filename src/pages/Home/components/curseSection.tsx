import { RetroGrid } from "@/components/magicui/retro-grid";
import { RainbowButton } from "@/components/magicui/rainbow-button";

import { BoxReveal } from "@/components/magicui/box-reveal";
import CardCurse from "./CardCurse";
import TitileWithDescription from "./TitileWithDescription";
import { motion } from "motion/react";

export const CurseSection = () => {
  return (
    <section className=" border gap-4 h-auto flex flex-col ml-6 mr-6 rounded-2xl mb-2 relative ">
      <RetroGrid></RetroGrid>
      <div className="p-6">
        <TitileWithDescription></TitileWithDescription>
      </div>

      <div className="flex justify-center items-center w-full mx-auto container p-4 z-10">
        <div className="grid grid-cols-12 place-content-center items-center w-full gap-4">
          <div className="col-span-7 grid grid-cols-3 gap-2 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardCurse
                description="Clases interactivas en tiempo real, donde podrás resolver dudas al instante."
                img="home/curso_online.png"
                title="Cursos personalizados"
              ></CardCurse>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <CardCurse
                description="Formación práctica y adaptada directamente en tu lugar de trabajo."
                img="home/empresa.png"
                title="Talleres en empresa"
              ></CardCurse>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <CardCurse
                description="Avanza según tu disponibilidad y estilo de aprendizaje, sin presiones."
                img="home/tiempo.png"
                title="Aprendizaje a tu ritmo"
              />
            </motion.div>
          </div>
          <div className="col-span-5  flex flex-col justify-end items-center w-full">
            <div className="size-full max-w-lg flex flex-col items-center justify-center overflow-hidden pt-8">
              <BoxReveal boxColor={"#167FA6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold text-center">
                  Inscribete<span className="text-primary">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#167FA6"} duration={0.5}>
                <RainbowButton variant="default" className="w-50">
                  Inscribete
                </RainbowButton>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
