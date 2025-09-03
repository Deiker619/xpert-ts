import { Header } from "@/components/Header/Header";
import FormContact from "./components/FormContact";
import { BorderBeam } from "@/components/magicui/border-beam";

const Contact = () => {
  return (
    <>
      <Header
        titleHeader="Contáctanos"
        bgHeader="url('img/contact/contact.jpg')"
        descriptionHeader="¿Tienes un proyecto o una idea? Estamos listos para ayudarte a desarrollarla."
        messageHeader="message"
      ></Header>

      <div className="h-110 w-full  mt-20 mb-30 py-4 ">
        <div className="ml-6 mr-6 flex bg-gray-900 rounded-2xl flex-col h-full border  relative">
          <div className="grid grid-cols-7  h-full w-full">
            <div className="col-span-4  flex flex-col">
              <div className=" h-full w-[90%] flex flex-col m-2 p-4 ">
                  
              </div>
            </div>
            <div className="border w-150 rounded-2xl p-4 bg-white shadow-lg absolute -top-20 inset-y-0 right-0 h-140">
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
