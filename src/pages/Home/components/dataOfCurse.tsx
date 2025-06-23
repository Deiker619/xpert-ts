import { cursoType } from "@/interfaces/Curso";

export const DataOfCurse = (
  /* {curso}: {curso:cursoType} */ curso: cursoType
) => {
  return <>{curso.name}</>;
};
