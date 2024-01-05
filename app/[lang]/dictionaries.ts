export type iForm = {
  [key: string]: {
    label: string;
    placeholder: string;
    type: string;
  };
};
export interface iSlidesProjects {
  id: number;
  description: string;
  title: string;
  link: string;
  stack: string[];
}
export interface iDictionaries {
  SLIDES_PROJECTS: iSlidesProjects[];
  form: iForm;
  projects: { [key: string]: string };
}
const dictionaries: {
  [key: string]: () => Promise<iDictionaries>;
} = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  "en-US": () =>
    import("../dictionaries/en.json").then((module) => module.default),
  "pt-br": () =>
    import("../dictionaries/pt-br.json").then((module) => module.default),
  pt: () =>
    import("../dictionaries/pt-br.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
