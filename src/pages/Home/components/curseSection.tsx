import { Card } from "@/components/card/Card";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CurseSection = () => {
  return (
    <section className=" border gap-4 h-auto flex flex-col ml-6 mr-6 rounded-2xl mb-2 relative ">
      <div className="flex flex-col w-full justify-center items-center p-6 relative">
        <h3 className="text-3xl text-center font-bold  tracking-tight leading-none md:text-4xl lg:text-6xl flex flex-col ">
          <AuroraText colors={["#45AEBA", "#167FA6", "#02196b"]}>
            Ver los mejores cursos
          </AuroraText>
          <div className="absolute inset-x-0 w-1/2 -z-1 h-20 bg-[#167FA6] blur-3xl opacity-20"></div>
        </h3>
      </div>
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
          <div className="col-span-5 bg-amber-100 flex flex-col justify-center items-center">
            A
          </div>
        </div>
      </div>
    </section>
  );
};
