import { Header } from "@/components/Header/Header";
import { MisionVision } from "./components/MisionVision";
import { Valores } from "./components/valores";

 const About = () => {
  return (
    <>
      <Header
        bgHeader={"url('img/about/bgabout.jpg')"}
        titleHeader={"Impulsa tu Carrera en lo Digital"}
        descriptionHeader={"con los mejores xpertos"}
        messageHeader={"Innovación que conecta, formación que transforma"}
      >
      </Header>
      <div className="mt-10">
        <MisionVision></MisionVision>
      </div>
      <div className="mt-5">
        <Valores></Valores>
      </div>
    </>
  );
};
export default About