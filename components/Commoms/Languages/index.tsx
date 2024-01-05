"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { Badge } from "@/components/ui/badge";
import { Repo } from "@/types";
// import { profileName } from "@/utils/constants";
// import { getReposWithLanguages } from "@/services/api";
import { getReposWithLanguages } from "@/utils/fetcher";
import useSWR from "swr";
import { SkeletonText } from "../Skeleton";

interface Props {
  slug: string;
  lang: string;
}

export default function Languages({ slug, lang }: Props) {
  const { data: allRepos } = useSWR<Repo[]>(slug, getReposWithLanguages);
  const { data: dict, isLoading: isLoadingDict } = useSWR(lang, getDictionary);
  const reposWithLanguages = allRepos
    ? allRepos?.filter((repo) => repo.language !== null)
    : [];

  const languages: string[] = [];
  reposWithLanguages?.forEach((repo) => {
    languages.push(repo.language);
  });

  const set = new Set(languages);
  const filteredLanguages = Array.from(set);

  return (
    <div className="mt-2">
      {!isLoadingDict && (
        <h3 className="font-semibold">{dict?.projects.languagesLabel}</h3>
      )}
      {isLoadingDict && <SkeletonText />}
      <div className="mt-1 w-full flex items-center gap-2 flex-wrap">
        {filteredLanguages &&
          filteredLanguages.slice(0, 5).map((language, index) => (
            <Badge key={index} variant="default">
              {language}
            </Badge>
          ))}
      </div>
    </div>
  );
}
