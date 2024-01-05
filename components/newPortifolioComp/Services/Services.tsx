"use client";
import { useTheme } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "./Services.css";
// import Resume from "./resume.pdf";

const Services = () => {
  // context
  const { theme } = useTheme();

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: theme ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Craft custom apps and affiliate platforms for seamless digital
          success!
          <br /> 🚀 Specialized in conversion-optimized websites, empowering
          marketers
          <br /> with cutting-edge technologies. Boost traffic, maximize online
          presence,
          <br /> and offer end-to-end web development solutions.
        </span>
        <a href={"!#"} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards bg-[red]">
        {/* first card */}
        <motion.div
          initial={{ left: "24rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={"/img/heartemoji.png"}
            heading={"Conversion-Optimized Website Development"}
            detail={"Crafting conversion-optimized websites for digital marketers and product owners. Boost traffic and maximize online presence."} color={""}          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-0rem" }}
          transition={transition}
        >
          <Card
            emoji={"/img/glasses.png"}
            heading={"Full Stack Developer"}
            detail={"Expert in NextJS, ReactJS, PHP (Laravel), NodeJS, and ReactNative. Deliver end-to-end web development, from scalable backends to user-friendly frontends."} color={""}          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "15rem", left: "24rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={"/img/humble.png"}
            heading={"Custom Application Development"}
            detail={
              "Custom applications, including interactive web and mobile solutions. i integrate robust affiliate marketing platforms, optimizing campaigns and tracking performance.              Craft custom apps and affiliate platforms for seamless digital success! 🚀"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
