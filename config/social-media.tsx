import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const socialMediaLinks: {
  [key: string]: {
    [key: string]: string | ReactNode;
  };
} = {
  // facebook:
  //   {
  // title:"Instagram"
  //   link: "https://www.facebook.com/bahianoticias/?ref=page_internal",
  //   icon: <FaFacebookF size={20} />,
  // },
  // twitter: {

  //  title:"Twitter"
  //   link: "https://twitter.com/BahiaNoticias",
  //   icon: <FaTwitter size={20} />,
  // },
  // instagram:
  //  {title:"Facebook"

  //   link: "https://www.instagram.com/bahianoticias/",
  //   icon: <FaInstagram size={20} />,
  // },
  // youtube: {

  //  title:"YouTube"
  //   link: "https://www.youtube.com/channel/UCelevrrg2g7NdlrJMPrunhw",
  //   icon: <FaYoutube size={20} />,
  // },
  linkedin: {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/andersonnascimentodossantos/",
    icon: <FaLinkedin size={32} fill={"#0077b5"} />,
    id: 1,
  },
  github: {
    title: "Github",
    link: "https://github.com/AndersonNascimentoDosSantos",
    icon: <FaGithub size={32} className="fill-primary" />,
    id: 1,
  },
};
