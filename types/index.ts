export interface Repo {
  id?: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string | null;
  owner: any;
}

export interface ProjectCardProps extends Repo {}
