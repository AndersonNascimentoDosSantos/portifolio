"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import "./Portfolio.css";
const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: theme ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Image fill src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image fill src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image fill src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image fill src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
