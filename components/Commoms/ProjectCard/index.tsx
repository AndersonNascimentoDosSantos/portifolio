import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SlidesCard, stack as stacks } from "@/utils/constants";
import axios from "axios";
import useSWR from "swr";
import { ImageCard } from "./ImageCard";

export const ProjectCard = ({
  index,
  className,
}: {
  index?: number;
  className?: string;
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>In Development : {index}</CardTitle>
        <CardDescription>in development</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export const CardProject = ({
  className,
  data,
}: {
  className?: string;

  data: SlidesCard;
}) => {
  const { data: base64Image } = useSWR(
    `/api/capture-screenshot?url=${data.link}`,
    async (url) => {
      const { data } = await axios.get(url, {
        timeout: 45000,
      });
      return data;
    }
  );
  return (
    <a href={data.link}>
      <Card className={cn(className)}>
        <CardHeader className="w-full">
          <ImageCard
            src={`data:image/png;base64,${base64Image}`}
            className="h-[300px]"
          />
          {/* <img src={} alt="Imagem" /> */}
          {/*  */}
        </CardHeader>

        <CardContent>
          <div className="p-4 flex items-center justify-evenly  ">
            {data.stack.map((stack, index) => {
              // console.log(data?.stack[stack]);
              return <span key={index}>{stacks[stack]}</span>;
            })}
          </div>
          <h3>
            <b>{data.title}</b>
          </h3>
        </CardContent>
        <CardFooter>
          <p className="px-2 text-justify">{data.description}</p>
        </CardFooter>
      </Card>
    </a>
  );
};
