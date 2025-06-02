import { Header } from "@/components/Header/Header";
import { Slider } from "./components/Slider";

const Services = () => {
  return (
    <>
      <Header
        bgHeader={"url('img/about/bgabout.jpg')"}
        titleHeader={"Pagina de Servicios"}
        descriptionHeader={""}
        messageHeader={"Innovación que conecta, formación que transforma"}
      ></Header>

      <section className="justify-center items-center flex flex-col my-4">
        <div className="">
          <h2 className="text-3xl font-normal text-center">
            Administración delegada <br />
            <span className="text-primary">de servicios IT</span>
          </h2>
        </div>
      </section>

      <section className="w-full">
        <div className=" grid grid-cols-2 ml-6 mr-6  place-items-center place-content-center gap-4 p-3">
          <div className="col-span-1 flex flex-col justify-center gap-4 mx-auto container w-[90%] h-full ">
            <div className="flex flex-col justify-start items-start">
              <img
                src="img/services/hardware.png"
                className="h-20 w-20 object-cover"
                alt=""
              />
            </div>
            {/*  Texto */}
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-normal text-gray-900 dark:text-white">
                Hardware
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                En Bytes Creativos Xpert, ofrecemos administración delegada de
                servicios IT, lo que incluye la gestión de ambientes en entornos
                IBM i. Nuestro equipo se encarga de configurar y mantener los
                ambientes necesarios para el correcto funcionamiento de tus
                sistemas.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-4 mx-auto container w-[90%] h-full ">
            <div className="flex flex-col justify-start items-start">
              <img
                src="img/services/ambientes.png"
                className="h-20 w-20 object-cover"
                alt=""
              />
            </div>
            {/*  Texto */}
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-normal text-gray-900 dark:text-white">
                Ambientes
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                En Bytes Creativos, ofrecemos administración delegada de
                servicios IT, lo que incluye la gestión de ambientes en entornos
                IBM i. Nuestro equipo se encarga de configurar y mantener los
                ambientes necesarios para el correcto funcionamiento de tus
                sistemas.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-4 mx-auto container w-[90%] h-full ">
            <div className="flex flex-col justify-start items-start">
              <img
                src="img/services/bd.png"
                className="h-20 w-20 object-cover"
                alt=""
              />
            </div>
            {/*  Texto */}
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-normal text-gray-900 dark:text-white">
                Base de datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                Como parte de nuestra administración delegada de servicios IT,
                nos encargamos de gestionar y mantener tu base de datos en
                entornos IBM i. Nuestro equipo se encarga de la configuración,
                seguridad, respaldo y optimización de la base de datos,
                asegurando su rendimiento y disponibilidad.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-4 mx-auto container w-[90%] h-full ">
            <div className="flex flex-col justify-start items-start">
              <img
                src="img/services/monitoreo.png"
                className="h-20 w-20 object-cover"
                alt=""
              />
            </div>
            {/*  Texto */}
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-normal text-gray-900 dark:text-white">
                Monitoreo
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                El monitoreo constante es esencial para asegurar el rendimiento
                y la disponibilidad de tus sistemas. En Bytes Creativos,
                brindamos servicios de monitoreo como parte de nuestra
                administración delegada de servicios IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-4 relative">
        <div className="">
          <h2 className="text-3xl font-normal text-center">
            Estos son los diferentes temas <br />
            <span className="text-primary">en los cuales podemos ayudarte</span>
          </h2>
        </div>
        <Slider></Slider>
        <div className="absolute w-52 h-30 bg-primary blur-[200px] -inset-y-25 -left-20 -z-1"></div>
      </section>
    </>
  );
};

export default Services;
