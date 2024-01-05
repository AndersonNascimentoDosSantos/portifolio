import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import "./Toggle.css";
const Toggle = () => {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    // debugger

    theme === "Dark" ? setTheme("ligth") : setTheme("Dark");
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={theme ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
