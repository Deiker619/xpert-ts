import { NumberTicker } from "@/components/magicui/number-ticker";
export const CompanyHighlights = () => {
  return (
    <>
      <section className="flex flex-col items-center h-auto w-full mb-10 relative -top-20">
        <div className="flex flex-col bg-quarter rounded-3xl w-full md:w-[80%] h-full justify-center items-center">
          <div className="grid md:grid-cols-9 gap-3 w-full h-full p-5">
            <div className="bg-thirty p-2 col-span-10 md:col-span-3 rounded-xl">
              <div className="grid grid-cols-3 place-items-center">
                <div className="flex flex-col p-2 shrink-0 col-span-3">
                  <h3 className="text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">
                    <NumberTicker
                      value={26}
                      className="text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
                    />
                    +
                  </h3>
                  <p className="font-semibold text-sm leading-none tracking-tight text-white md:text-md ">
                    Años en el mercado.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 col-span-5 md:col-span-2 rounded-xl">
              <div className=" flex flex-col justify-center items-center w-full p-2 h-full gap-2">
                <h3 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                  <NumberTicker
                    value={99}
                    className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
                  />
                  %
                </h3>
                <p className="text-md text-center font-semibold w-full  tracking-tight text-gray-900 md:text-md lg:text-[13px] ">
                  Herramientas de Replicación
                </p>
              </div>
            </div>
            <div className="bg-white p-2 col-span-5 md:col-span-2 rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-2 h-full gap-2">
                <h3 className="text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl ">
                  <NumberTicker
                    value={1000}
                    className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl "
                  />
                  +
                </h3>
                <p className="text-sm text-center font-semibold leading-none tracking-tight text-gray-900 md:text-md lg:text-md ">
                  Profesionales Capacitados
                </p>
              </div>
            </div>
            <div className="bg-white p-2 col-span-10 md:col-span-2 rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-3 h-full gap-2">
                <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                  <NumberTicker
                    value={98}
                    className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
                  />
                  %
                </h3>
                <p className="text-sm text-center font-semibold leading-none tracking-tight text-gray-900 md:text-md lg:text-md ">
                  De Índice de Satisfacción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
