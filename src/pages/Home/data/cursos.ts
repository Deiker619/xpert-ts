import { cursoType } from "@/interfaces/Curso";
import { Component2Icon, GlobeIcon, PersonIcon, SpeakerQuietIcon } from "@radix-ui/react-icons";
import { ComputerIcon, LayersIcon, Table2Icon } from "lucide-react";

export const cursos: cursoType[] = [
  {
    name: "Metodologías Ágiles",
    image: "img/home/empresarial.jpg",
    icon: LayersIcon,
    colorTextTitle: "bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "",
    description: "",
    cta: "Ver curso",
  },
  {
    name: "Blockchain",
    image: "img/home/blockchain.jpg",
    icon: GlobeIcon,
    colorTextTitle: "text-yellow-400 bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Inteligencia Artificial",
    image: "img/home/inteligencia.jpg",
    icon: PersonIcon,
    colorTextTitle: "text-blue-400 bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Idiomas",
    image: "img/home/idiomas.jpg",
    icon: SpeakerQuietIcon,
    colorTextTitle: "bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Desarrollo",
    image: "img/home/desarrollo_min.jpg",
    icon: LayersIcon,
    colorTextTitle:
      "text-blue-500 font-bold bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Soft Skills",
    image: "img/home/soft_min.jpg",
    icon: GlobeIcon,
    colorTextTitle: "text-yellow-400 bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Arquitectura",
    image: "img/home/contenedor_min.jpg",
    icon: PersonIcon,
    colorTextTitle: "text-white bg-blue/30 backdrop-blur-lg rounded-lg",
    colorTextDescription: "",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Ciberseguridad",
    image: "img/home/seguridad_min.jpg",
    icon: Component2Icon,
    colorTextTitle:
      "text-[#58bcc7] bg-cyan/30 backdrop-blur-lg rounded-lg font-extrabold",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "IBM AS400",
    image: "img/home/ibm1.jpg",
    icon: ComputerIcon,
    colorTextTitle:
      "text-blue-500 bg-blue/30 backdrop-blur-lg rounded-lg font-extrabold",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
  {
    name: "Base de datos",
    image: "img/home/bd_min.jpg",
    icon: Table2Icon,
    colorTextTitle:
      "text-[#58bcc7] bg-blue/30 backdrop-blur-lg rounded-lg font-extrabold",
    colorTextDescription: "text-white",
    description: "",
    cta: "Ver cursos",
  },
];