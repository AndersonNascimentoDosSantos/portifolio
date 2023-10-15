"use client";
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */

import { ReactNode, useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import { Carousel } from "@material-tailwind/react";
import clsx from "clsx";
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from "swiper/react";
import { Button } from "../ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface SwiperControllerProps {
  currentSlide: number;
}

const SwiperController = ({ currentSlide }: SwiperControllerProps) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper.destroyed) swiper.slideTo(currentSlide);
  }, [currentSlide, swiper]);

  return null;
};

interface PaginationProps {
  onSlideChange: (slideIndex: number) => void;
  itemsQuantity: number;
  currentSlide: number;
}

const Pagination = ({
  onSlideChange,
  itemsQuantity,
  currentSlide,
}: PaginationProps) => {
  const itemsArray = new Array(itemsQuantity).fill(null);
  return (
    <div className="flex gap-6 items-center justify-center ">
      <Button
        variant="icon"
        onClick={() =>
          onSlideChange(
            currentSlide !== 0 ? currentSlide - 1 : itemsQuantity - 1
          )
        }
      >
        <IoChevronBackOutline size={16} className="text-primary-50" />
      </Button>

      <div className="flex gap-2 items-center justify-center">
        {itemsArray.map((_, index) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={clsx("block w-2 h-2 cursor-pointer rounded-full", {
              "bg-primary-50": index === currentSlide,
              "border border-primary-50": index !== currentSlide,
            })}
            onClick={() => onSlideChange(index)}
            onKeyUp={() => onSlideChange(index)}
            aria-label={`slide-${index}`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
      <Button
        variant="icon"
        onClick={() =>
          onSlideChange(currentSlide < itemsQuantity - 1 ? currentSlide + 1 : 0)
        }
      >
        <IoChevronForwardOutline size={16} />
      </Button>
    </div>
  );
};

interface Props<DataType> extends SwiperProps {
  items: Array<DataType>;
  renderSlideItem: (item: DataType) => ReactNode;
  classes?: {
    root?: string;
    slideItem?: string;
  };
  pagination?: boolean;
  reactKeyProp: keyof DataType;
  slidesPerView?: number;
}

// Classes to let each slide with the same height -> className="!h-auto"

export const SliderSwipe = <DataType extends unknown>({
  items,
  renderSlideItem,
  classes,
  slidesPerView = 1,
  pagination = false,
  reactKeyProp,
  ...props
}: Props<DataType>) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // console.log(pagination);
  const handleSlideChange = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < items.length)
      setCurrentSlide(slideIndex);
  };

  return (
    <div>
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        pagination={pagination}
        slidesPerView={slidesPerView}
        className={classes?.root || ""}
        spaceBetween={16}
        {...props}
      >
        {items.map((item) => (
          <SwiperSlide
            className={classes?.slideItem}
            key={String(item[reactKeyProp])}
          >
            {renderSlideItem(item)}
          </SwiperSlide>
        ))}
        {pagination ? (
          <>
            <SwiperController currentSlide={currentSlide} />
            <Pagination
              onSlideChange={handleSlideChange}
              itemsQuantity={items.length}
              currentSlide={currentSlide}
            />
          </>
        ) : null}
      </Swiper>
    </div>
  );
};

export function Slider() {
  return (
    <Carousel className="rounded-xl" autoplay loop>
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
