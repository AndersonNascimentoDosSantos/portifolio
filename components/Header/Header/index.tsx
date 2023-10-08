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

        <MainMenu />
      </div>
    </nav>
  );
};
