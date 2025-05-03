

export const CompanyHighlights = () => {
  return (
    <>
      <section className="flex flex-col items-center h-[250px] w-full mb-20 relative">
        <div className="flex flex-col bg-gray-900 rounded-3xl w-[80%] h-full justify-center items-center">
          <div className="grid grid-cols-9 gap-3 w-full h-full p-10">
            <div className="bg-[#0396D6] p-2 col-span-3 rounded-xl">
              <div className="grid grid-cols-3">
                <div className="flex flex-col p-2 shrink-0 col-span-2">
                  <h3 className="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                    50K+
                  </h3>
                  <p className="font-semibold leading-none tracking-tight text-white md:text-md dark:text-white">
                    Satisfied Clientes
                  </p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center p-2 w-full flex-grow">
                  <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
                    a
                  </div>
                </div>
              </div>
              <div className="row-span-1 flex p-2">
                <div className="flex flex-col gap-2">
                  <p className="font-normal leading-none tracking-tight text-white md:text-sm dark:text-white">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="font-normal leading-none tracking-tight text-white md:text-sm dark:text-white">
                    maxime atque, assumenda dolor ipsam sequi
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 col-span-2 rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-4 h-full gap-2">
                <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  13+
                </h3>
                <p className="text-md font-semibold leading-none tracking-tight text-gray-900 md:text-md lg:text-md dark:text-white">
                  Year Experience
                </p>
              </div>
            </div>
            <div className="bg-white p-2 col-span-2 rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-4 h-full gap-2">
                <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  20
                </h3>
                <p className="text-md font-semibold leading-none tracking-tight text-gray-900 md:text-md lg:text-md dark:text-white">
                  Profesional Designer
                </p>
              </div>
            </div>
            <div className="bg-white p-2 col-span-2 rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-4 h-full gap-2">
                <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  10k
                </h3>
                <p className="text-md font-semibold leading-none tracking-tight text-gray-900 md:text-md lg:text-md dark:text-white">
                  Digital Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
