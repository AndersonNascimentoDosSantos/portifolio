import { getDictionary } from "@/app/[lang]/dictionaries";
import axios from "axios";

export const fetcher = async (key: string) => {
  const data = await getDictionary(key);
  return data;
};
const headers = new Headers({
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
});

export const getUserData = async ({ profileName }: { profileName: string }) => {
  // console.log("dentro do getuserData");
  try {
    const response = await axios.get(
      `https://api.github.com/users/${profileName}`,
      {
        headers: {
          // "Cache-Control": "no-store",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          // Adicione outros cabeçalhos conforme necessário
        },
      }
    );

    // console.log("dentro do getuserData");

    const data = response.data;

    // console.log(data, "dentro do getdata");

    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getUserRepos = async (profileName: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos?per_page=8&page=${page}`,
    {
      cache: "no-store",
      headers,
    }
  );

  const data = await response.json();
  const nextPage = data.length === 0 ? null : page + 1;

  return { data, nextPage };
};

export const getReposWithLanguages = async (profileName: string) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos`,
    {
      cache: "no-store",
      headers,
    }
  );
  return await response.json();
};
