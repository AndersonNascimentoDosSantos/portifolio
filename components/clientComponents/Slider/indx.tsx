"use client";
import { SliderSwipe } from "@/components/Slider";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import ClientComponent from "../RenderItem";

export default function ComponentName({ lang }: { lang?: string,itemList:Array<any> }) {
  const { data: dict, error } = useSWR(lang, fetcher);

  if (error) {
    return <div>Error fetching dictionary data</div>;
  }

  if (!dict) {
    return <div>Loading dictionary data...</div>;
  }

  return (
    <SliderSwipe
      loop
      pagination
      slidesPerView={1}
      items={dict.SLIDES_PROJECTS}
      classes={{
        slideItem: "w-full",
      }}
      reactKeyProp="id"
      renderSlideItem={ClientComponent}

    />
  );
}
