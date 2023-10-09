"use client";
import { ProjectCard } from "@/components/Commoms/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

import { SliderSwipe } from "@/components/Slider";
import { SHEET_STACKS } from "@/utils/constants";
import { ThemeProvider } from "@material-tailwind/react";
const Home = () => {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col  justify-between p-8 w-[full]">
        <div className="grid grid-cols-3 grid-rows-1 h-[full] gap-5">
          <section className="flex  h-[full] flex-col flex-grow flex-[2] col-span-2">
            <ContactForm />
          </section>
          <section className="flex flex-col flex-[1] col-span-1">
            stack slide
            <SliderSwipe
              loop
              autoplay
              pagination
              items={SHEET_STACKS.slides || []}
              classes={{ slideItem: "!w-full" }}
              reactKeyProp="id"
              renderSlideItem={(item) => {
                return <ProjectCard index={item.id} />;
              }}
            />
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
