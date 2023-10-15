import { getDictionary } from "@/app/[lang]/dictionaries";

export const fetcher = async (key: string) => {
  const data = await getDictionary(key);
  return data;
};
