import { RetroGrid } from "@/components/magicui/retro-grid";

import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export const CurseSection = () => {
  return (
    <section className=" border gap-4 h-auto flex flex-col ml-6 mr-6 rounded-2xl mb-2 relative ">
      <RetroGrid></RetroGrid>
      {/* Cursos */}
      <div className="flex justify-center items-center w-full mx-auto container p-10 z-10">
        <div className="grid grid-cols-12 place-content-center items-center w-full gap-4">
          <div className="col-span-7 grid grid-cols-3  gap-2 ">
            <div className="bg-red-100 h-80 w-full col-span-1">a</div>
            <div className="bg-red-100 h-full w-full col-span-1">a</div>
            <div className="bg-red-100 h-full w-full col-span-1">a</div>
         
          </div>
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
