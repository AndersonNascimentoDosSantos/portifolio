import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProjectCard = ({
  index,
  className,
}: {
  index?: number;
  className?: string;
}) => {
  return (
    <Card className={cn("shadow-md", className)}>
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
