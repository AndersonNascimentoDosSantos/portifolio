"use client";

import { iDictionaries } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface ShareButtonProps {
  url: string;
  dict: iDictionaries;
}

export function ShareButton({ url, dict }: ShareButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{dict.projects.share}</Button>
      </PopoverTrigger>
      <PopoverContent className="flex items-center justify-around gap-2 flex-wrap max-w-[160px]">
        <WhatsappShareButton url={url}>
          <WhatsappIcon round={true} size={25} />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round={true} size={25} />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} size={25} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon round={true} size={25} />
        </TwitterShareButton>
      </PopoverContent>
    </Popover>
  );
}
