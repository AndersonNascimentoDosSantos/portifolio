"use client";
import { CardProject } from "@/components/Commoms/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

import { SliderSwipe } from "@/components/Slider";
import { ThemeProvider } from "@material-tailwind/react";
import { Suspense } from "react";
import { getDictionary } from "./dictionaries";

const Home = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return (
    <ThemeProvider>
      <main className="flex min-h-screen max-w-screen flex-col  justify-between p-8 ">
        <div className="grid grid-cols-3 grid-rows-1 h-[full] gap-5">
          <section className="flex  h-[full] flex-col flex-grow flex-[2] col-span-2">
            <ContactForm formnames={dict.form} />
          </section>
          <section className="flex flex-col flex-1 col-span-1 w-full h-full justify-start">
            <div className="flex flex-col flex-1 col-span-1 w-full h-full items-center">
              <h2>Active Projects</h2>
            </div>
            <Suspense>
              <SliderSwipe
                loop
                pagination
                slidesPerView={1}
                items={dict.SLIDES_PROJECTS}
                classes={{
                  slideItem: "w-full",
                }}
                reactKeyProp="id"
                renderSlideItem={(item) => {
                  return (
                    <div className="flex flex-col gap-2 p-5">
                      <CardProject
                        className="h-[385px]"
                        src="https://via.placeholder.com/300x300"
                        data={item}
                      />
                      {/* <ProjectCard index={item.id} className="w-full h-full" /> */}
                    </div>
                  );
                }}
              />
            </Suspense>
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
