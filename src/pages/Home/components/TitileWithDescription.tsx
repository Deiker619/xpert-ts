import { TextAnimate } from "@/components/magicui/text-animate";

const TitileWithDescription = () => {
  return (
    <>
      <div className="w-full flex flex-col ml-5">
        <div className="flex flex-col justify-start">
          
            <TextAnimate className="text-3xl" animation="slideLeft" by="character">
              Modalidades de Cursos
            </TextAnimate>
          
        </div>
        <div className="flex flex-col w-200">
          <p className="text-lg">
            Ofrecemos una variedad de modalidades para que aprendas de la manera
            que mejor se adapte a tus necesidades y ritmo:
          </p>
        </div>
      </div>
    </>
  );
};

export default TitileWithDescription;
