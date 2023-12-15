"use client";
import { GithubCard } from "@/components/Commoms/GithubCard";
import Languages from "@/components/Commoms/Languages";
import { ImageCard } from "@/components/Commoms/ProjectCard/ImageCard";
import { ShareButton } from "@/components/Commoms/Share-button";
import { Skeleton, SquareSkeleton } from "@/components/Commoms/Skeleton";

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

const Project = () => {
  const { data: user, isLoading } = useSWR({ profileName }, getUserData);

  // useEffect(() => {
  //   const teste = async () =>
  //     console.log(await getUserData({ profileName }), "dentro do user effect");

  //   teste();
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
    <main className="container mx-auto mt-28 max-sm:mt-20">
      {!isLoading && (
        <section
          id="hero"
          className="w-full grid grid-cols-2 gap-8 p-4 max-sm:grid-cols-1 "
        >
          <div className="flex flex-col justify-center gap-2 pl-24 max-sm:p-0 animate-fade-right">
            <span className="text-xl text-slate-300">Olá. Eu me chamo</span>
            <h2 className="font-bold text-5xl">{user?.name}</h2>
            <p className="text-slate-400">{user?.bio ?? ""}</p>
            <Languages slug={profileName} />
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
                Entre em contato
              </Link>
              <ShareButton
                url={`https://my-gitfolio.vercel.app/portfolio/${profileName}`}
              />
            </div>
          </div>
          <ImageCard
            src={user?.avatar_url}
            // alt="Github profile avatar"
            // loading="lazy"
            // width={340}
            // height={340}
            className="rounded-full border-4 border-primary max-sm:mx-auto animate-fade-left"
          />
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
        <div className="w-full my-8 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 animate-fade-up">
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
