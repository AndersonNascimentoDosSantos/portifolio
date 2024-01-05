"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTheme } from "next-themes";

import Image from "next/image";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const { theme } = useTheme();

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: theme ? "white" : "" }}>Hy! I Am</span>
          <span>Anderson Nascimento</span>
          <span>
            I'm a results-driven Full Stack Developer based in Ilhéus, Bahia.
            With a solid background in Systems Analysis and Development, I excel
            in crafting efficient web solutions using technologies like NextJS,
            ReactJS, and PHP.
          </span>
          <span>
            Ready to elevate your web development projects? Click below to hire
            me and let's create something extraordinary together! 🚀
          </span>
        </div>
        <Link href="#contact">
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/AndersonNascimentoDosSantos">
            <Image fill src={"/img/github.png"} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/andersonnascimentodossantos/">
            <Image fill src={"/img/linkedin.png"} alt="" />
          </a>
          {/* <a href="!#"><Image fill src={Instagram} alt="" /></a> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <Image fill src={"/img/Vector1.png"} alt="" />
        <Image fill src={"/img/Vector2.png"} alt="" />
        <Image fill src={"/img/boy.png"} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={"/img/glassesimoji.png"}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={"/img/crown.png"} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv
            img={"/img/thumbup.png"}
            text1="Best Design"
            text2="Award"
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
