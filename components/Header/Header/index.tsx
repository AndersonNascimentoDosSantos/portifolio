import { SocialMedia } from "@/components/SocialMedia";
import { ModeToggle } from "@/components/ToggleTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PersonAvatar } from "../Avatar";
import { MainMenu } from "../MainMenu";
import PersonalInfo from "../PersonalInfo";

export const Header = () => {
  return (
    <nav className="p-5 shadow  shadow-black-b">
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
              <ModeToggle />
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
