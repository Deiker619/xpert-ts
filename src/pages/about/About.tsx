import { Header } from "@/components/Header/Header";
import { MisionVision } from "./components/MisionVision";
import { Valores } from "./components/valores";

export const About = () => {
  return (
    <>
      <Header></Header>
      <div className="mt-10">
        <MisionVision></MisionVision>
      </div>
      <div className="mt-5">
        <Valores></Valores>
      </div>
    </>
  );
};
