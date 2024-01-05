"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import Image from "next/image";
import "./Works.css";
const Works = () => {
  // context
  const theme = useTheme();

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: theme ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <a href="#contact">
            <button className="button s-button">Hire Me</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <Image fill src={"/img/Upwork.png"} alt="" />
          </div>
          <div className="w-secCircle">
            <Image fill src={"/img/fiverr.png"} alt="" />
          </div>
          <div className="w-secCircle">
            <Image fill src={"/img/amazon.png"} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <Image fill src={"/img/Shopify.png"} alt="" />
          </div>
          <div className="w-secCircle">
            <Image fill src={"/img/Facebook.png"} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
