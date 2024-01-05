import Link from "next/link";
// import Toggle from "../Toggle/Toggle";
import { ModeToggle } from "@/components/ToggleTheme";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Anderson</div>
        <ModeToggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a className="active" href="#Navbar">
                Home
              </a>
            </li>
            <li>
              <a href="#services">Serivces</a>
            </li>
            <li>
              <a href="#works">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Protfolio</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
        <Link href="#contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
