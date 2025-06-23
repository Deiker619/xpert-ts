
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ModalCurseProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ModalCurse = ({ isOpen, onClose }: ModalCurseProps) => {
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
            className="bg-white/3 relative w-full z-13 h-full overflow-visible -top-7  flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Evita que el click interior cierre el modal
          >
            <div className="relative overflow-auto z-50 bg-white rounded-2xl p-4 w-[90%] h-120 top-12 border flex flex-col">
              <div className="w-full">
                <button
                  className="absolute w-10 h-10 top-2 left-3 size-16  rounded-2xl flex flex-col justify-center items-center hover:bg-gray-100"
                  onClick={onClose}
                >
                  <X></X>
                </button>
                {/*Curse description  */}
                <div className="">
                  <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                      <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                          <img
                            className="w-full dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                            alt=""
                          />
                          <img
                            className="w-full hidden dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            Titulo del curso
                          </h1>
                          <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                              Detalles
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <div className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                              </div>
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

                          <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <RainbowButton variant="default" className="w-50">
                              Inscribete
                            </RainbowButton>
                          </div>

                          <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                          <p className="mb-6 text-gray-500 dark:text-gray-400">
                            Two Thunderbolt USB 4 ports and up to two USB 3
                            ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless.
                            Color matched Magic Mouse with Magic Keyboard or
                            Magic Keyboard with Touch ID.
                          </p>

                          <p className="text-gray-500 dark:text-gray-400">
                            Two Thunderbolt USB 4 ports and up to two USB 3
                            ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless.
                            Color matched Magic Mouse with Magic Keyboard or
                            Magic Keyboard with Touch ID.
                          </p>
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
