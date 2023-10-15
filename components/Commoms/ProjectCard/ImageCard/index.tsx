import { AvatarFallback, AvatarImage, CardImage } from "@/components/ui/avatar";

export function ImageCard({ src }: { src: string }) {
  return (
    <CardImage>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>
        <AvatarImage src="https://via.placeholder.com/300x300" alt="@shadcn" />
      </AvatarFallback>
    </CardImage>
  );
}
