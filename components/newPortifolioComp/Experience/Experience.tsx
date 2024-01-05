"use client"

import { useTheme } from "next-themes";
import "./Experience.css";
const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: theme ? "var(--orange)" : "" }}>
          2+
        </div>
        <span style={{ color: theme ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: theme ? "var(--orange)" : "" }}>
          20+
        </div>
        <span style={{ color: theme ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: theme ? "var(--orange)" : "" }}>
          2+
        </div>
        <span style={{ color: theme ? "white" : "" }}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
