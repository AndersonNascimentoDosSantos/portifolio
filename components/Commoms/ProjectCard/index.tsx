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
  src: string;
  data: SlidesCard;
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="h-[45%]">
        <ImageCard src={`/api/capture-screenshot?url=${data.link}`} />
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
  );
};
