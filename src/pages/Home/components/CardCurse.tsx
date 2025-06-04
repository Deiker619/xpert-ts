import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface CardCurseProps {
    title: string,
    description: string,
    img: string
}

const CardCurse = ({title, description, img}: CardCurseProps) => {
  return (
    <>
      <div className="bg-white backdrop-blur-2xl border-primary border-2 h-80 w-full md:col-span-1 col-span-3 rounded-2xl p-4 gap-3 flex flex-col">
        <div className="w-full flex flex-col ">
          <img src={`img/${img}`} alt="logo_curso" className="h-12 w-12" />
        </div>
        {/* Title */}
        <div className="w-full text-2xl  h-[20%] ">
          <p>{title}</p>
        </div>
        <div className="w-full text-md font-normal h-[40%]">
          <p>
            {description}
          </p>
        </div>
        <div className="w-full flex justify-start">
          <InteractiveHoverButton className="   ">Solicitar</InteractiveHoverButton>
        </div>
      </div>
    </>
  );
};

export default CardCurse;
