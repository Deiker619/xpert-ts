import { TextAnimate } from "@/components/magicui/text-animate";

const TitileWithDescription = () => {
  return (
    <>
      <div className="w-full flex flex-col ml-5">
        <div className="flex flex-col justify-start mb-4">
          
            <TextAnimate className="md:text-3xl text-2xl" animation="slideLeft" by="character">
              Modalidades de Cursos
            </TextAnimate>
          
        </div>
        <div className="flex flex-col md:w-200 w-full">
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
