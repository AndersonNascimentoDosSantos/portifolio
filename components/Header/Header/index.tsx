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
    <nav className="p-5 shadow  light:shadow-light-green-100 dark:shadow-light-green-200  dark:border-white ">
      <div className="flex flex=[1] h-[full] justify-between items-center flex-col md:flex-row gap-2">
        <div className="flex items-center gap-2 flex-1 order-2 md:order-1">
          <PersonAvatar />
          <PersonalInfo />
        </div>
        <div className="flex items-center gap-2  w-full flex-1 justify-start md:justify-end order-1 md:order-2">
          <SocialMedia className="order-2 md:order-1" />
          <MainMenu className="order-1 md:order-2" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Suspense>
                <ModeToggle className="order-3" />
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
