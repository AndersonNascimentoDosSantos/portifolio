import { ReactNode } from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaJsSquare, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export const profileName = "AndersonNascimentoDosSantos";
// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
export interface SlidesCard {
  id: number;
  description: string;
  title: string;
  link: string;
  stack: string[];
}

export const SHEET_STACKS: { [key: string]: string[] } = {
  MOBILE: ["JAVA", "KOTLIN", "REACTNATIVE"],
  BACKEND: ["NODE", "PHP", "LARAVEL", "NESTJS"],
  FRONTEND: [
    "NEXTJS",
    "REACTJS",
    "HTML/CSS/JS",
    "TAILWIND",
    "STYLEDCOMPONET",
    "STICHES",
  ],
};
export const SHEET_PLATAFORMS = ["MOBILE", "FRONTEND", "BACKEND"];
// type SheetSide = (typeof SHEET_SIDES)[number];

export const stack: { [key: string]: ReactNode } = {
  javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
  nextjs: <TbBrandNextjs size={32} />,
  tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
  react: <FaReact size={32} fill={" #61DBFB"} />,
  php: <FaPhp size={32} fill={"#474a8a"} />,
  laravel: <FaLaravel size={32} fill={"#F05340"} />,
};
// export const SLIDES_PROJECTS: Array<SlidesCard> = [
//   {
//     id: 1,
//     description: "",
//     title: "Camaçari Noticias",
//     link: "https://cn1.com.br",
//     stack: {
//       javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
//       nextjs: <TbBrandNextjs size={32} />,
//       tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
//       react: <FaReact size={32} fill={" #61DBFB"} />,
//       php: <FaPhp size={32} fill={"#474a8a"} />,
//     },
//   },
//   {
//     id: 2,
//     description:
//       "Acompanhe o Bahia Notícias e leia as últimas notícias de Salvador, da Bahia e do Brasil",
//     title: "Bahia Noticias",
//     link: "https://www.bahianoticias.com.br",
//     stack: {
//       javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
//       nextjs: <TbBrandNextjs size={32} />,
//       tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
//       react: <FaReact size={32} fill={" #61DBFB"} />,
//       php: <FaPhp size={32} fill={"#474a8a"} />,
//     },
//   },
//   {
//     id: 3,
//     description: "",
//     title: "Sindicato dos Bancarios",
//     link: "https://www.bancariosbahia.org.br",
//     stack: {
//       javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
//       nextjs: <TbBrandNextjs size={32} />,
//       tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
//       react: <FaReact size={32} fill={" #61DBFB"} />,
//       php: <FaPhp size={32} fill={"#474a8a"} />,
//     },
//   },
//   {
//     id: 4,
//     description: "",
//     title: "Sindicato Dos Metalurgicos",
//     link: "https://www.fetimbahia.org.br/",
//     stack: {
//       javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
//       nextjs: <TbBrandNextjs size={32} />,
//       tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
//       react: <FaReact size={32} fill={" #61DBFB"} />,
//       php: <FaPhp size={32} fill={"#474a8a"} />,
//     },
//   },
//   {
//     id: 5,
//     description:
//       "compre, Venda, Compare Valores e Ficha Técnica de carros novos, seminovos e usados. Fique por dentro das novidades no mercado automotivo em um único lugar.",
//     title: "BnAutos",
//     link: " https://www.bnautos.com.br/",
//     stack: {
//       javascript: <FaJsSquare size={32} fill={"#e5a126"} />,
//       nextjs: <TbBrandNextjs size={32} />,
//       tailwind: <BiLogoTailwindCss fill={"#38bdf8"} size={32} />,
//       react: <FaReact size={32} fill={" #61DBFB"} />,
//       php: <FaPhp size={32} fill={"#474a8a"} />,
//       laravel: <FaLaravel size={32} fill={"#F05340"} />,
//     },
//   },
// ];
