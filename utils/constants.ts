// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
export const SHEET_STACKS: { [key: string]: string[] | any[] } = {
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
  slides: [
    {
      id: 1,
      title: "NEXTJS",
    },
    {
      id: 2,
      title: "REACTJS",
    },
    {
      id: 3,
      title: "HTML/CSS/JS",
    },
    {
      id: 4,
      title: "TAILWIND",
    },
  ],
};
export const SHEET_PLATAFORMS = ["MOBILE", "FRONTEND", "BACKEND"];
// type SheetSide = (typeof SHEET_SIDES)[number];
