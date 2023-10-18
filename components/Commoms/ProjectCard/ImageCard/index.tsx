import { AvatarFallback, AvatarImage, CardImage } from "@/components/ui/avatar";

export function ImageCard({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <CardImage className={className}>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>No Image</AvatarFallback>
    </CardImage>
  );
}
