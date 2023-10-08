import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PersonAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/41703647?v=4"
        alt="@shadcn"
      />
      <AvatarFallback>AN</AvatarFallback>
    </Avatar>
  );
}
