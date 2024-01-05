// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Image fill src={"/img/wave.png"} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
