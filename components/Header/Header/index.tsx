import { SocialMedia } from "@/components/SocialMedia";
import { ModeToggle } from "@/components/ToggleTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Suspense } from "react";
import { PersonAvatar } from "../Avatar";
import { MainMenu } from "../MainMenu";
import PersonalInfo from "../PersonalInfo";

export const Header = () => {
  return (
    <nav className="p-5 shadow  light:shadow-light-green-100 dark:shadow-light-green-200  dark:border-white">
      <div className="flex flex=[1] h-[full] justify-between items-center">
        <div className="flex items-center gap-2">
          <PersonAvatar />
          <PersonalInfo />
        </div>
        <div className="flex items-center gap-2">
          <SocialMedia />
          <MainMenu />
          <Tooltip>
            <TooltipTrigger asChild>
              <Suspense>
                <ModeToggle />
              </Suspense>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change theme</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};
