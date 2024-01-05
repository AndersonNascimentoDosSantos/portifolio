"use client";
import { GithubCard } from "@/components/Commoms/GithubCard";
import Languages from "@/components/Commoms/Languages";
import { ImageCard } from "@/components/Commoms/ProjectCard/ImageCard";
import { ShareButton } from "@/components/Commoms/Share-button";
import {
  Skeleton,
  SkeletonText,
  SquareSkeleton,
} from "@/components/Commoms/Skeleton";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectCardProps, Repo } from "@/types";
import { profileName } from "@/utils/constants";
import { getUserData, getUserRepos } from "@/utils/fetcher";
import Link from "next/link";
import { JSX } from "react";
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai";
import { useInfiniteQuery } from "react-query";
import useSWR from "swr";
import { getDictionary } from "../dictionaries";

const Project = ({ params: { lang } }: { params: { lang: string } }) => {
  // const [dict, setDict] = useState<iDictionaries>({} as iDictionaries);

  const { data: user, isLoading } = useSWR({ profileName }, getUserData);

  const { data: dict, isLoading: isLoadingDict } = useSWR(lang, getDictionary);
  // useEffect(() => {
  //   getDictionary(lang).then((resp) => {
  //     setDict(resp);
  //   });
  // }, []);
  // console.log(user, "depois do swr");
  const {
    data: repos,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<{ data: Repo[]; nextPage: number | null }>({
    queryKey: ["repos"],
    queryFn: async ({ pageParam = 1 }) =>
      await getUserRepos(profileName, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  // console.log(repos, "repositories");
  if (isError) return <div>Algo deu errado...</div>;

  return (
    <main className="container mx-auto mt-28 max-sm:mt-20 flex-col">
      {!isLoading && (
        <section
          id="hero"
          className="w-full flex-col md:grid md:grid-cols-2 gap-8 p-4 max-sm:grid-cols-1 "
        >
          <div className="order-2 flex flex-col justify-center gap-2 md:pl-24 max-sm:p-0 animate-fade-right md:order-1">
            {!isLoadingDict && (
              <span className="text-xl text-slate-300">
                {dict?.projects.gratting}
              </span>
            )}
            {isLoadingDict && <SkeletonText />}
            <h2 className="font-bold text-5xl">{user?.name}</h2>
            <p className="text-slate-400">{user?.bio ?? ""}</p>
            <Languages {...{ lang, slug: profileName }} />
            <div className="mt-5 flex items-center gap-2">
              <Link
                href={
                  !user?.blog ? `https://github.com/${profileName}` : user?.blog
                }
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "max-w-[150px]"
                )}
              >
                {dict?.projects.contact}
              </Link>
              {dict && (
                <ShareButton
                  {...{
                    url: `https://my-gitfolio.vercel.app/portfolio/${profileName}`,
                    dict,
                  }}
                />
              )}
              {isLoadingDict && <SkeletonText />}
            </div>
          </div>
          <div className="order-1 md:order-2 mt-20 h-[350px] w-[350px]">
            <ImageCard
              src={user?.avatar_url}
              // alt="Github profile avatar"
              // loading="lazy"
              // width={340}
              // height={340}
              className="rounded-full border-4 border-primary max-sm:mx-auto animate-fade-left "
            />
          </div>
        </section>
      )}

      {isLoading && <Skeleton />}

      <section
        id="projects"
        className="mt-28 mb-12 w-full p-2 flex flex-col gap-4 items-center"
      >
        <h2 className="font-bold text-3xl text-center animate-fade-down">
          Meus <span className="text-primary">Projetos </span> de Estudo
        </h2>
        <div className="w-full my-8 flex flex-col gap-4 md:grid  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 animate-fade-up">
          <>
            {repos &&
              repos.pages.map((repos) =>
                repos.data?.map(
                  (repo: JSX.IntrinsicAttributes & ProjectCardProps) => (
                    <GithubCard key={repo.id} {...repo} />
                  )
                )
              )}

            {isFetching &&
              Array.from({ length: 8 }, (_, index) => <SquareSkeleton />)}
          </>
        </div>
        {user?.totalRepos === 0 && <div>Nenhum repositório público.</div>}
        {hasNextPage && (
          <Button
            size="lg"
            className="w-full md:w-36"
            onClick={() => fetchNextPage()}
            variant="default"
          >
            {isFetching ? (
              <Spinner size={20} className="animate-spin" />
            ) : (
              "Carregar mais"
            )}
          </Button>
        )}
      </section>
    </main>
  );
};

export default Project;
