import { BentoCard } from "@/components/magicui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  GlobeIcon,
  LayersIcon,
  PersonIcon,
  SpeakerQuietIcon,
} from "@radix-ui/react-icons";

export const ServiceSection = () => {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(https://bytescreativos.net/src/img/contenido/coafondo.png)",
        }}
        className="relative parallax object-cover md:h-130 h-220 bg-center bg-no-repeat bg-cover bg-blend-multiply w-full grid grid-cols-7 mb-11 "
      >
        {/* <!-- Contenido principal --> */}
        <div className="w-full h-full col-span-7 flex flex-col items-center justify-center z-10  gap-2">
          <div className="grid w-full md:h-80 h-uto grid-cols-4 gap-4 p-4">
            <div className="md:col-span-1 col-span-4 h-full bg-white backdrop-blur-md rounded-2xl">
              <BentoCard
                name={"Metodologias Agiles"}
                className={"h-full w-full"}
                background={
                  <img
                    src="img/home/empresarial.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={LayersIcon}
                description={"+100 cursos personalizados "}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-4 h-full bg-white backdrop-blur-md rounded-2xl">
              <BentoCard
                name={"Blockchain"}
                className={"h-full w-full"}
                colorTextTitle={"text-yellow-400"}
                colorTextDescription="text-white"
                background={
                  <img
                    src="img/home/blockchain.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={GlobeIcon}
                description={"+100 cursos personalizados "}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-4 h-full bg-white backdrop-blur-md rounded-2xl">
              <BentoCard
                name={"Inteligencia Artificial"}
                className={"h-full w-full"}
                colorTextTitle={"text-blue-400"}
                background={
                  <img
                    src="img/home/inteligencia.jpg"
                    className="absolute inset-0 opacity-100 object-cover bg-center h-full w-full"
                  />
                }
                Icon={PersonIcon}
                description={"+100 cursos personalizados "}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
            <div className="md:col-span-1 col-span-4 h-full bg-white backdrop-blur-md rounded-2xl">
              <BentoCard
                name={"Idiomas"}
                className={"h-full w-full"}
                colorTextDescription={"text-white"}
                background={
                  <img
                    src="img/home/idiomas.jpg"
                    className="absolute inset-0 opacity-100 object-cover h-full w-full"
                  />
                }
                Icon={SpeakerQuietIcon}
                description={"+100 cursos personalizados "}
                href={""}
                cta={"Solicitar"}
              ></BentoCard>
            </div>
          </div>

          {/*  <!-- fondo encima  --> */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-sky-400 opacity-50"></div>

        <div className="absolute md:right-140 right-20 -bottom-1 w-50 h-20 rounded-2xl z-10 bg-white">
          {/* <!-- viñeta para redondear --> */}

          {/* <!-- Message header --> */}
          <div className="absolute w-full h-full bg-cover rounded-t-full bg-transparent overflow-hidden z-10">
            <div className="rounded h-full w-full absolute  p-1">
              <div className="w-full h-full rounded-lg backdrop-blur-lg flex flex-col justify-center items-center p-2">
                <Button className="z-10 bg-[#167FA6]">Explorar cursos</Button>
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
        </div>
      </section>
    </>
  );
};
