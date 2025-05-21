import { Header } from "../../components/Header/Header";
import { CompanyHighlights } from "./components/CompanyHighlights";
import { IntroSection } from "./components/IntroSection";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CurseSection } from "./components/curseSection";
import { Ripple } from "@/components/magicui/ripple";

import { ServiceSection } from "./components/servicesSection";

export const Home = () => {
  return (
    <>
      <Header
        bgHeader={"url('img/bg.jpg')"}
        descriptionHeader="con los mejores xpertos"
        titleHeader="Impulsa tu Carrera en lo Digital"
        messageHeader="Innovación que conecta, formación que transforma"
      >

      </Header>
      <BlurFade delay={0.25} inView>
        <IntroSection></IntroSection>
      </BlurFade>
      <section className="h-[600px] flex flex-col mt-4">
        {/* <!-- Title --> */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <h2 className="text-4xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl md:text-start dark:text-white">
              <TextAnimate animation="blurIn">
                Conviertete en tu mejor versión
              </TextAnimate>
            </h2>
            <h2 className="text-4xl font-extrabold leading-none tracking-tight text-primary md:text-2xl lg:text-6xl dark:text-white">
              <TextAnimate animation="blurIn">Sé un Xpert</TextAnimate>
            </h2>
          </div>
          <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <BlurFade delay={0.25} inView>
          <div className="w-full flex justify-center items-center overflow-x-visible relative ">
            <div className="col-span-1 relative flex flex-col justify-center items-center -z-1 top-20">
              <div className="absolute">
                <div className=" md:w-120 md:h-140 hidden rounded-full p-4 md:flex md:justify-center md:items-center relative">
                  <Ripple></Ripple>
                </div>
              </div>
              <div className=" w-100 h-100 rounded-full relative"></div>
            </div>

            <div className="absolute h-auto w-auto left-10  z-1">
              <i>
                <p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary ">
                  BYTES
                </p>
              </i>
            </div>
            <div className="absolute h-auto w-auto right-10  z-1">
              <p className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r to-[#02196b]">
                XPERT
              </p>
            </div>

            <div className="absolute w-52 h-52 bg-blue-300 blur-[120px] -inset-y-50 -left-20 z-1"></div>

            <img
              src="img/algo1.png"
              className="md:h-100 md:w-170 h-full w-full object-cover filter grayscale absolute top-[-2rem] bottom-50"
              alt=""
            />
          </div>
        </BlurFade>
      </section>
      <BlurFade delay={0.25} inView>
        <CompanyHighlights></CompanyHighlights>
      </BlurFade>

      <ServiceSection></ServiceSection>

      <CurseSection></CurseSection>
    </>
  );
};
