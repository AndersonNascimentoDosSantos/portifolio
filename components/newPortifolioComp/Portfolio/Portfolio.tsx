"use client";

import { useTheme } from "next-themes";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
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
          <img src={"/img/sidebar.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/img/ecommerce.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/img/musicapp.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/img/hoc.png"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
