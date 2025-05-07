import { ShinyButton } from "@/components/magicui/shiny-button";
import { Header } from "../../components/Header/Header";
import { CompanyHighlights } from "./components/CompanyHighlights";
import { IntroSection } from "./components/IntroSection";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CurseSection } from "./components/curseSection";
import { Ripple } from "@/components/magicui/ripple";

export const Home = () => {
  return (
    <>
      <Header></Header>
      {/* <!--other section  --> */}
      <BlurFade delay={0.25} inView>
        <IntroSection></IntroSection>
      </BlurFade>
      {/* <!-- Personas --> */}

      <section className="h-[600px] flex flex-col mt-4">
        {/* <!-- Title --> */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <TextAnimate animation="blurIn">
                Conviertete en tu mejor version
              </TextAnimate>
            </h2>
            <h2 className="text-4xl font-extrabold leading-none tracking-tight text-[#167FA6] md:text-2xl lg:text-6xl dark:text-white">
              <TextAnimate animation="blurIn">Sé un Xpert</TextAnimate>
            </h2>
          </div>
          <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <BlurFade delay={0.25} inView>
          <div className="w-full flex justify-center items-center overflow-x-visible relative border">
            <div className="col-span-1 relative flex flex-col justify-center items-center -z-1 top-20">
              <div className="absolute">
                <div className=" w-120 h-140 rounded-full p-4 flex justify-center items-center relative">
                  <Ripple></Ripple>
                </div>
              </div>
              <div className=" w-100 h-100 rounded-full relative"></div>
            </div>

            <div className="absolute h-auto w-auto left-10  z-1"><i><p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#167FA6] ">BYTES</p></i></div>
            <div className="absolute h-auto w-auto right-10  z-1"><p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-[#02196b]">XPERT</p></div>

            <div className="absolute w-52 h-52 bg-blue-300 blur-[120px] -inset-y-50 -left-20 z-1"></div>

            <img
              src="img/algo1.png"
              className="h-100 w-170 object-cover filter grayscale absolute top-[-2rem] bottom-50"
              alt=""
            />
          </div>
        </BlurFade>
      </section>
      <BlurFade delay={0.25} inView>
        <CompanyHighlights></CompanyHighlights>
      </BlurFade>

      {/* <!-- Section con wave --> */}

      <section
        style={{
          backgroundImage:
            "url(https://bytescreativos.net/src/img/contenido/coafondo.png)",
        }}
        className="relative object-cover h-130 bg-center bg-no-repeat bg-cover bg-blend-multiply w-full grid grid-cols-7 mb-11 overflow-hidden"
      >
        {/* <!-- Contenido principal --> */}
        <div className="w-full h-full col-span-4 flex flex-col items-center justify-center z-10 p-4  gap-2">
          <div className="grid w-full h-full grid-cols-2 gap-2 p-4">
            <div className="col-span-1 h-full bg-white backdrop-blur-md rounded-2xl">
              <div className="h-full p-8 rounded-md flex flex-col justify-center items-center">
                <div className="justify-center items-center">
                  <img
                    className="h-20 max-w-md"
                    src="https://bytescreativos.net/src/img/iconos/icono-cyberseguridad.svg"
                    alt="image description"
                  />
                </div>
                <div className="justify-center items-center">
                  <p className="text-3xl text-gray-900 font-semibold">
                    Cyberseguridad
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full bg-white backdrop-blur-md rounded-2xl">
              <div className="h-full p-8 rounded-md flex flex-col justify-center items-center">
                <div className="justify-center items-center">
                  <img
                    className="h-20 max-w-md"
                    src="https://bytescreativos.net/src/img/iconos/icono-cyberseguridad.svg"
                    alt="image description"
                  />
                </div>
                <div className="justify-center items-center">
                  <p className="text-3xl text-gray-900 font-semibold">
                    Cyberseguridad
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-2 gap-2 p-4">
            <div className="col-span-1 h-full bg-white backdrop-blur-md rounded-2xl">
              <div className="h-full p-8 rounded-md flex flex-col justify-center items-center">
                <div className="justify-center items-center">
                  <img
                    className="h-20 max-w-md"
                    src="https://bytescreativos.net/src/img/iconos/icono-cyberseguridad.svg"
                    alt="image description"
                  />
                </div>
                <div className="justify-center items-center">
                  <p className="text-3xl text-gray-900 font-semibold">
                    Cyberseguridad
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full bg-white backdrop-blur-md rounded-2xl">
              <div className="h-full p-8 rounded-md flex flex-col justify-center items-center">
                <div className="justify-center items-center">
                  <img
                    className="h-20 max-w-md"
                    src="https://bytescreativos.net/src/img/iconos/icono-cyberseguridad.svg"
                    alt="image description"
                  />
                </div>
                <div className="justify-center items-center">
                  <p className="text-3xl text-gray-900 font-semibold">
                    Cyberseguridad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- fondo encima  --> */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-sky-400 opacity-50"></div>

        {/* <!-- Imagen wave al fondo --> */}
        <div className="absolute bottom-0 right-0 h-[100%] ">
          <div className=" absolute inset-y-0 right-30 flex flex-col w-80 justify-center items-center">
            <h6 className="mb-4 text-xl FLEX  font-semibold text-center text-gray-900 dark:text-white md:text-md lg:text-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#45AEBA] from-[#02196b]">
            
                Solicita Nuestros Servicios

                
              </span>{" "} <br /> 
              Ahora Mismo
            </h6>
            <ShinyButton className="bg-[#167FA6] text-white">
              Conoce mas
            </ShinyButton>
          </div>
          <img
            src="img/wave.svg"
            className="h-[100%] w-300 z-0 pointer-events-none object-cover"
            alt="wave"
          />
        </div>
      </section>

      <CurseSection></CurseSection>
    </>
  );
};
