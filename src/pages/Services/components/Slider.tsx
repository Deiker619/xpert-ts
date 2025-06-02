import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Slider = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-[80%] flex flex-col mx-auto my-4 h-70"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 h-full"
          >
           
              <div className="col-span-4  md:col-span-1 p-4 flex flex-col  w-full justify-center items-center ">
                <div className="bg-white border border-primary rounded-2xl h-50 w-full relative shadow-lg">
                  <div className="absolute bg-white  h-16 w-16 -top-4 left-0  rounded-full">
                    <img
                      src="img/about/valores/innovacion.png"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                  <div className="p-2 flex justify-center items-center w-full ">
                    <p className="mt-11 text-md font-semibold">
                      Innovación y Adaptabilidad{" "}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center w-full p-3 ">
                    <p className="text-sm font-normal text-center">
                      Educación basada en tendencias tecnológicas y metodologías
                      ágiles para un aprendizaje relevante.
                    </p>
                  </div>
                </div>
              </div>
        
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
