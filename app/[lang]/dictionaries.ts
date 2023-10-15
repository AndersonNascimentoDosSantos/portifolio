import "server-only";

export type iForm = {
  [key: string]: {
    label: string;
    placeholder: string;
    type: string;
  };
};
// : { [key: string]: Array<SlidesCard> }
const dictionaries: {
  [key: string]: () => Promise<{
    SLIDES_PROJECTS: {
      id: number;
      description: string;
      title: string;
      link: string;
      stack: string[];
    }[];
    form: iForm;
  }>;
} = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  "pt-br": () =>
    import("../dictionaries/pt-br.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
