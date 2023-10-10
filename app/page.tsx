"use client";
import { ProjectCard } from "@/components/Commoms/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

import { SliderSwipe } from "@/components/Slider";
import { SHEET_STACKS } from "@/utils/constants";
import { ThemeProvider } from "@material-tailwind/react";
const Home = () => {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen max-w-screen flex-col  justify-between p-8 ">
        <div className="grid grid-cols-3 grid-rows-1 h-[full] gap-5">
          <section className="flex  h-[full] flex-col flex-grow flex-[2] col-span-2">
            <ContactForm />
          </section>
          <section className="flex flex-col flex-1 col-span-1 w-full ">
            <SliderSwipe
              loop
              pagination
              slidesPerView={1}
              items={SHEET_STACKS.slides || []}
              classes={{
                slideItem: "!w-full w-[calc(80%)]   ",
                root: "w-full",
              }}
              reactKeyProp="id"
              renderSlideItem={(item) => {
                return (
                  <div className="flex flex-col gap-2">
                    <ProjectCard index={item.id} className="w-full h-full" />
                    <ProjectCard index={item.id} className="w-full h-full" />
                  </div>
                );
              }}
            />
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
