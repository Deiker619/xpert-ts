import { BentoCard } from "@/components/magicui/bento-grid";
import {
  Component2Icon,
  GlobeIcon,
  LayersIcon,
  PersonIcon,
  SpeakerQuietIcon,
} from "@radix-ui/react-icons";
import { ComputerIcon, Table2Icon } from "lucide-react";

export const ServiceSection = () => {
  return (
    <>
      <section
        
        className="relative bg-[#f0f0eb] overflow-hidden parallax object-cover md:h-auto h-auto bg-center bg-no-repeat bg-cover bg-blend-multiply w-full grid grid-cols-7 mb-11 "
      >
        {/* <!-- Contenido principal --> */}
        <div className="w-full h-full col-span-7 flex flex-col items-center justify-center z-10  gap-2 md:mb-20 mb-50">
          <div className="grid w-full md:h-130 h-auto grid-cols-6 md:grid-cols-5 gap-3 p-4 ">
            <div className="md:col-span-1 col-span-6 h-full w-full  place-items-center rounded-2xl">
              <BentoCard
                name={"Metodologias Agiles"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle="bg-blue/30 backdrop-blur-lg rounded-lg"
                background={
                  <img
                    src="img/home/empresarial.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={LayersIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Blockchain"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-yellow-400 bg-blue/30 backdrop-blur-lg rounded-lg"}
                colorTextDescription="text-white"
                background={
                  <img
                    src="img/home/blockchain.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={GlobeIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Inteligencia Artificial"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-blue-400 bg-blue/30 backdrop-blur-lg rounded-lg"}
                background={
                  <img
                    src="img/home/inteligencia.jpg"
                    className="absolute inset-0 opacity-100 object-cover bg-center h-full w-full"
                  />
                }
                Icon={PersonIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Idiomas"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextDescription={"text-white"}
                colorTextTitle="bg-blue/30 backdrop-blur-lg rounded-lg"
                background={
                  <img
                    src="img/home/idiomas.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={SpeakerQuietIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Desarrollo"}
                colorTextDescription="text-white "
                colorTextTitle="text-blue-500 font-bold bg-blue/30 backdrop-blur-lg rounded-lg"
                className={"md:h-50 md:w-60 h-40 w-full"}
                background={
                  <img
                    src="img/home/desarrollo_min.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={LayersIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Soft Skills"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-yellow-400 bg-blue/30 backdrop-blur-lg rounded-lg"}
                colorTextDescription="text-white"
                background={
                  <img
                    src="img/home/soft_min.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={GlobeIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Arquitectura"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-white bg-blue/30 backdrop-blur-lg rounded-lg"}
                background={
                  <img
                    src="img/home/contenedor_min.jpg"
                    className="absolute inset-0 opacity-100 object-cover bg-center h-full w-full"
                  />
                }
                Icon={PersonIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1  col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Ciberseguridad"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-[#58bcc7] bg-cyan/30 backdrop-blur-lg rounded-lg font-extrabold"}
                colorTextDescription={"text-white"}
                background={
                  <img
                    src="img/home/seguridad_min.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={Component2Icon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1  col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"IBM AS400"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-blue-500 bg-blue/30 backdrop-blur-lg rounded-lg font-extrabold"}
                colorTextDescription={"text-white"}
                background={
                  <img
                    src="img/home/ibm1.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={ComputerIcon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1  col-span-6 h-full place-items-center  rounded-2xl">
              <BentoCard
                name={"Base de datos"}
                className={"md:h-50 md:w-60 h-40 w-full"}
                colorTextTitle={"text-[#58bcc7] bg-blue/30 backdrop-blur-lg rounded-lg font-extrabold"}
                colorTextDescription={"text-white"}
                background={
                  <img
                    src="img/home/bd_min.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={Table2Icon}
                description={""}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
           
          </div>

          {/*  <!-- fondo encima  --> */}
        </div>

        {/*Gradiente azul de fondo  */}
        <div className="absolute top-0 left-0 w-full h-full z-0  bg-dark-900 opacity-50"></div>
        
        {/* Viñeta superior */}
        <div className="absolute inset-x-0 left-12 -top-0 md:w-90 w-60 h-11 rounded-2xl z-10 bg-white ">
          {/* <!-- viñeta para redondear --> */}
          {/* <!-- Message header --> */}
          <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent overflow-hidden z-10">
            <div className="rounded h-full w-full absolute  p-1">
              <div className="w-full h-full rounded-lg  flex flex-col justify-center items-center p-2">
                <p className="font-semibold text-md md:text-xl">Categoria de Cursos</p>
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
