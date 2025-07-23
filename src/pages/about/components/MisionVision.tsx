

export const MisionVision = () => {
  return (
    <>
      <section className="w-full flex flex-col h-auto py-2 relative">

        <div className="grid grid-cols-12 gap-3 h-full ml-6 mr-6">
          <div className="col-span-12 h-130 bg-white rounded-2xl flex flex-col overflow-hidden relative">
            <div className="  grid grid-cols-2 flex-col justify-center gap-3 w-full h-full p-2 bg-center bg-cover bg-no-repeat">
              <div className=" col-span-1 flex flex-col justify-center items-center">
                <div className="w-full h-full relative  flex  justify-end items-center">
                  <div className="flex flex-col -rotate-90 absolute bottom-22 left-20">
                    <p className="text-3xl  ">
                      +25 años
                    </p>
                    <p className="text-md text-center">En el mercado.</p>

                  </div>
                  <img src="img/about/mision.jpeg" className="h-100 shadow-2xl w-102 rounded-2xl" alt="" />
                </div>
              </div>
              <div className=" col-span-1 flex flex-col">
                <div className="flex flex-col w-full gap-2 p-6 justify-center items-start h-full">
                  <p className="text-2xl w-106 text-blue-900"> En Bytes Creativos Xpert diseñamos experiencias que enseñan, conectan y transforman.</p>
                  <div className="">
                    <div className="text-gray-500 ">
                      <span className="font-bold text-black"><b>Bytes Creativos  Xpert </b></span>nace como la evolución natural de más de 25 años de experiencia en el mundo de la tecnología y la innovación. Somos una compañía con visión global y corazón latinoamericano, especializada en crear soluciones integrales que impulsan el crecimiento de personas y organizaciones.

                      Iniciamos esta nueva etapa con un enfoque claro: la educación como motor de transformación. A través de programas de formación técnica, metodológica y estratégica, ayudamos a profesionales y empresas a estar a la altura de los desafíos del presente y del futuro digital.
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
        <div className="grid grid-cols-12 gap-3 h-full ml-6 mr-6 mt-10">
          <div className="col-span-12 h-auto w-[90%]  mx-auto container  justify-center items-center bg-white rounded-2xl flex flex-col overflow-hidden relative">
            <div className="border-t border-l border-b border-r-[0] w-full h-auto  place-items-center">
              <div className=" grid w-full grid-cols-2 p-4 place-items-center">
                <div className="flex flex-col col-span-1  w-90">
                  <p className="flex flex-col text-lg justify-center items-center  ">
                    Misión
                  </p>
                  <p className="text-sm  text-balance text-gray-500">
                    Empoderamos a profesionales y empresas a través de una formación accesible, innovadora y de alta calidad, alineada con las demandas del mercado global. Mediante cursos, talleres y asesoría especializada en tecnología y metodologías ágiles, facilitamos el desarrollo de habilidades clave para la transformación digital. Nos enfocamos en la formación práctica y aplicable, fomentando el aprendizaje continuo y el crecimiento sostenible de personas y organizaciones en el mundo hispanohablante y más allá
                  </p>
                </div>
                <div className="flex flex-col col-span-1  w-80 justify-center items-center">
                  <p>Visión</p>
                  <p className="text-sm  text-balance text-gray-500">
                    Empoderamos a profesionales y empresas a través de una formación accesible, innovadora y de alta calidad, alineada con las demandas del mercado global. Mediante cursos, talleres y asesoría especializada en tecnología y metodologías ágiles, facilitamos el desarrollo de habilidades clave para la transformación digital. Nos enfocamos en la formación práctica y aplicable, fomentando el aprendizaje continuo y el crecimiento sostenible de personas y organizaciones en el mundo hispanohablante y más allá
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
