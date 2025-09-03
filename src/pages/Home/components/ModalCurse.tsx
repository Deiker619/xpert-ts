
import Stars from "@/components/Stars/Stars";
import { Button } from "@/components/ui/button";
import { cursoType } from "@/interfaces/Curso";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ModalCurseProps {
  isOpen: boolean;
  onClose: () => void;
  onCurseSelected: cursoType | null
}
export const ModalCurse = ({ isOpen, onClose, onCurseSelected }: ModalCurseProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed  z-14 inset-0 max-h-[100vh] h-full w-full overflow-auto top-4 right-4  text-black  rounded-lg"
          initial={{ opacity: 0 }}
          key="modal-overlay"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/3 relative h-full w-full z-13  overflow-visible   flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()} // Evita que el click interior cierre el modal
          >
            <div className="relative overflow-auto z-50 bg-white rounded-2xl  w-[90%] max-h-[80%] h-auto top-1 border flex flex-col">
              <div className="w-full">
                <button
                  className="absolute  w-10 h-10 top-2 left-3 size-16  rounded-2xl flex flex-col justify-center items-center hover:bg-gray-100"
                  onClick={onClose}
                >
                  <X></X>
                </button>
                {/*Curse description  */}
                <div className="">
                  <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                    <div className=" px-4 mx-auto 2xl:px-0 ">
                      <div className="lg:grid lg:grid-cols-4 lg:gap-2">
                        <div className="shrink-0 lg:col-span-2 max-w-lg lg:max-w-lg mx-auto ">
                          <img
                            className="w-full h-full rounded-2xl object-cover dark:hidden"
                            src={onCurseSelected?.image}
                            alt=""
                          />

                        </div>

                        <div className="mt-6 sm:mt-8 lg:col-span-2 lg:mt-0 ">
                          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {onCurseSelected?.name}
                          </h1>
                          <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                              Detalles
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <Stars></Stars>
                              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                (5.0)
                              </p>
                              <a
                                href="#"
                                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                              >
                                345 Reviews
                              </a>
                            </div>
                          </div>



                          <hr className="my-6 border-gray-200 dark:border-gray-800" />

                          <div className="flex flex-col w-full  gap-3">
                            <div className="grid grid-cols-5 gap-3 p-3">
                              {/* Cursos */}
                              <div className="col-span-5 bg-white border rounded-2xl  h-auto flex flex-col p-3">
                                
                                <div className=" flex-col h-full grid grid-cols-4 place-content-center-center">

                                  <div className="col-span-3  flex flex-col">
                                    <div className="w-full flex gap-3">
                                      <div className="w-12">
                                        <div className="w-full h-full rounded-xl bg-blue-600"></div>
                                      </div>
                                      <div className="flex-1 w-full flex flex-col">
                                        <div className="w-full flex flex-col">
                                          <p className="text-md">Titulo del curso</p>

                                        </div>
                                        <div className="w-full flex flex-col">
                                          <p className="text-sm text-gray-500">Titulo del curso</p>

                                        </div>

                                      </div>
                                    </div>

                                  </div>
                                  <div className="col-span-1 flex justify-center items-center">

                                    <Button className="bg-gray-900">Solicitar Curso</Button>
                                  </div>
                                </div>

                              </div>
                              <div className="col-span-5 bg-white border rounded-2xl  h-auto flex flex-col p-3">
                                
                                <div className=" flex-col h-full grid grid-cols-4 place-content-center-center">

                                  <div className="col-span-3  flex flex-col">
                                    <div className="w-full flex gap-3">
                                      <div className="w-12">
                                        <div className="w-full h-full rounded-xl bg-blue-600"></div>
                                      </div>
                                      <div className="flex-1 w-full flex flex-col">
                                        <div className="w-full flex flex-col">
                                          <p className="text-md">Titulo del curso</p>

                                        </div>
                                        <div className="w-full flex flex-col">
                                          <p className="text-sm text-gray-500">Titulo del curso</p>

                                        </div>

                                      </div>
                                    </div>

                                  </div>
                                  <div className="col-span-1 flex justify-center items-center">

                                    <Button className="bg-gray-900">Solicitar Curso</Button>
                                  </div>
                                </div>

                              </div>
                              <div className="col-span-5 bg-white border rounded-2xl  h-auto flex flex-col p-3">
                                
                                <div className=" flex-col h-full grid grid-cols-4 place-content-center-center">

                                  <div className="col-span-3  flex flex-col">
                                    <div className="w-full flex gap-3">
                                      <div className="w-12">
                                        <div className="w-full h-full rounded-xl bg-blue-600"></div>
                                      </div>
                                      <div className="flex-1 w-full flex flex-col">
                                        <div className="w-full flex flex-col">
                                          <p className="text-md">Titulo del curso</p>

                                        </div>
                                        <div className="w-full flex flex-col">
                                          <p className="text-sm text-gray-500">Titulo del curso</p>

                                        </div>

                                      </div>
                                    </div>

                                  </div>
                                  <div className="col-span-1 flex justify-center items-center">

                                    <Button className="bg-gray-900">Solicitar Curso</Button>
                                  </div>
                                </div>

                              </div>



                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="absolute w-20 h-50 bg-primary blur-[150px] -z-0 right-0 bottom-0"></div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
