import { ContactForm } from "@/components/ContactForm";

import { Suspense } from "react";
import { getDictionary } from "./dictionaries";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen max-w-screen flex-col  justify-between p-8 ">
      <div className="grid grid-cols-3 grid-rows-1 h-[full] gap-5">
        <section className="flex  h-[full] flex-col flex-grow flex-[2] col-span-2">
          <Suspense>
            <ContactForm formnames={dict.form} />
          </Suspense>
        </section>
        <section className="flex flex-col flex-1 col-span-1 w-full h-full">
          <div className="flex  items-center justify-center">
            <h2>Active Projects</h2>
          </div>
          <Suspense>
            {/* <SliderSwipe
              loop
              pagination
              slidesPerView={1}
              items={dict.SLIDES_PROJECTS}
              classes={{
                slideItem: "w-full",
              }}
              reactKeyProp="id"
              renderSlideItem={ClientComponent}
            /> */}
          </Suspense>
        </section>
      </div>
    </main>
  );
}
