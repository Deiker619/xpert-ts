import { Header } from "@/components/Header/Header";
import FormContact from "./components/FormContact";
import { BorderBeam } from "@/components/magicui/border-beam";
import Orb from "@/components/Orb";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Contact = () => {
  return (
    <>
      <Header
        titleHeader="Contáctanos"
        bgHeader="url('img/contact/contact.jpg')"
        descriptionHeader="¿Tienes un proyecto o una idea? Estamos listos para ayudarte a desarrollarla."
        messageHeader="message"
      ></Header>

      <div className="md:h-110 h-auto w-full  mt-20 md:mb-30 py-4 ">
        <div className="ml-6 mr-6 flex dark:bg-dark rounded-2xl flex-col h-full border  relative">
          <div className="grid grid-cols-7  h-full w-full">
            <div className="col-span-4  flex flex-col">
              <div className=" h-full w-[90%]  flex-col m-2 p-4 dark:text-white relative hidden md:flex">
               
                  <div className="w-full flex items-center justify-center inset-0 absolute gap-3 flex-col">
                    <p className="text-6xl">Contáctenos</p>
                    <div className="grid grid-cols-3 gap-3">
                      <InstagramLogoIcon className="size-10"></InstagramLogoIcon>
                      <LinkedInLogoIcon className="size-10"></LinkedInLogoIcon>
                      <TwitterLogoIcon className="size-10"></TwitterLogoIcon>
                    </div>
                  </div>
                  <div className="">
                    
                  </div>
                  <Orb
                    hoverIntensity={0.6}
                    rotateOnHover={true}
                    hue={1}
                    forceHoverState={false}
                  />

                  
                
              </div>
            </div>
            <div className="border border-primary w-auto md:w-150 rounded-2xl p-4 bg-white dark:bg-[#0a0a0a] shadow-lg col-span-7 md:absolute md:-top-20 md:inset-y-0 md:right-0 h-140">
              <FormContact className=""></FormContact>
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                colorFrom="green"
                colorTo="blue"
                className="from-transparent  to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
