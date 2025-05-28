import { Card } from "@/components/card/Card";
import { RetroGrid } from "@/components/magicui/retro-grid";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export const CurseSection = () => {
  return (
    <section className=" border gap-4 h-auto flex flex-col ml-6 mr-6 rounded-2xl mb-2 relative ">
      
      <RetroGrid></RetroGrid>
      {/* Cursos */}
      <div className="flex justify-center items-center w-full mx-auto container p-10 z-10">
        <div className="grid grid-cols-12 place-content-center items-center w-full gap-4">
          <Carousel className="col-span-7 grid-cols-2  gap-2 ">
            <CarouselContent>
              <CarouselItem className="grid grid-cols-2 col-span-2 w-full">
                <div className="col-span-1  bg-white flex flex-col justify-center items-center h-100">
                  <Card></Card>
                </div>
                <div className="col-span-1  bg-white flex flex-col justify-center items-center h-100">
                  <Card></Card>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-2 col-span-2 w-full">
                <div className="col-span-1  bg-white flex flex-col justify-center items-center h-100">
                  <Card></Card>
                </div>
                <div className="col-span-1  bg-white flex flex-col justify-center items-center h-100">
                  <Card></Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="z-1" />
          </Carousel>
          <div className="col-span-5  flex flex-col justify-end items-center w-full">

            <div className="size-full max-w-lg flex flex-col items-center justify-center overflow-hidden pt-8">
              <BoxReveal boxColor={"#167FA6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold text-center">
                  Inscribete<span className="text-primary">.</span>
                </p>
              </BoxReveal>


              <BoxReveal boxColor={"#167FA6"} duration={0.5}>
                <Button className="mt-[1.6rem] bg-primary">Inscribete</Button>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
