import { BentoCard } from "@/components/magicui/bento-grid";

import { cursos } from "../data/cursos";
import { useEffect, useState } from "react";
/* import { Modal } from "./Modal";
import { cursoType } from "@/interfaces/Curso";
import { DataOfCurse } from "./dataOfCurse"; */
import { ModalCurse } from "./ModalCurse";
import { cursoType } from "@/interfaces/Curso";

export const ServiceSection = () => {
  const [selectedCurso, setSelectedCurso] = useState<cursoType | null>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(showModal, selectedCurso);
  }, [showModal, selectedCurso]);
  return (
    <>
      
      
      <section className="relative bg-[#f0f0eb] overflow-hidden parallax object-cover md:h-auto h-auto bg-center bg-no-repeat bg-cover bg-blend-multiply w-full grid grid-cols-7 mb-11 ">
        {/* <!-- Contenido principal --> */}
        <div className="w-full h-full col-span-7 flex flex-col items-center justify-center z-10  gap-2 md:mb-20 mb-50">
          <div className="grid w-full md:h-130 h-auto grid-cols-6 md:grid-cols-5 gap-3 p-4 ">
            {cursos.map((curso, index) => (
              <div
                key={index}
                className="md:col-span-1 col-span-6 h-full w-full  place-items-center rounded-2xl"
              >
                <BentoCard
                  
                  name={curso.name}
                  className={"md:h-50 md:w-60 h-40 w-full"}
                  colorTextTitle="bg-blue/30 backdrop-blur-lg rounded-lg"
                  background={
                    <img
                      src={curso.image}
                      className="absolute inset-0 opacity-100 object-cover h-full w-full"
                    />
                  }
                  Icon={curso.icon}
                  description={""}
                  href={""}
                  cta={curso.cta}
                  onClick={() => { setSelectedCurso(curso); setShowModal(true) } }
                ></BentoCard>
                <ModalCurse isOpen={showModal} onCurseSelected={selectedCurso} onClose={() => setShowModal(false)} />
              </div>
            ))}
          </div>
        </div>

        {/*Gradiente azul de fondo  */}
        <div className="absolute top-0 left-0 w-full h-full z-0  bg-dark-900 opacity-50"></div>

        {/* Viñeta superior */}
        <div className="absolute inset-x-0 left-12 -top-0 md:w-90 w-60 h-11 rounded-2xl  bg-white ">
          {/* <!-- viñeta para redondear --> */}
          {/* <!-- Message header --> */}
          <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent overflow-hidden">
            <div className="rounded h-full w-full absolute  p-1">
              <div className="w-full h-full rounded-lg  flex flex-col justify-center items-center p-2">
                <p className="font-semibold text-md md:text-xl">
                  Categoria de Cursos
                </p>
              </div>
            </div>
          </div>

          {/* <!-- viñeta para redondear --> */}
          <div className="absolute top-0 left-[-48px] size-16 w-12 h-12 trasparent rotate-[-90deg] rounded-lg pointer-events-none">
            <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_white]"></div>
          </div>
          <div className="absolute top-0 -right-12  size-16 w-12 h-12 trasparent rotate-[180deg] rounded-lg pointer-events-none">
            <div className="w-12 h-12 rounded-full shadow-[35px_35px_0_10px_white]"></div>
          </div>
        </div>
      </section>
    </>
  );
};
