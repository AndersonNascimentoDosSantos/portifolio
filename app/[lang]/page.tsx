import ComponentName from "@/components/clientComponents/Slider/indx";
import { Suspense } from "react";

import FormContact from "@/components/Form";
import { getDictionary } from "./dictionaries";
export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="container mx-auto mt-28 max-sm:mt-20">
      <div className="h-[full] gap-5 flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 ">
        <section className="flex  h-[full] flex-col flex-grow flex-[2] col-span-2">
          <Suspense>
            <FormContact formnames={dict.form} />
          </Suspense>
        </section>
        <section className="flex flex-col flex-1 col-span-1 w-full h-full">
          <div className="flex  items-center justify-center">
            <h2>Active Projects</h2>
          </div>

          <ComponentName {...{ lang }} />
        </section>
      </div>
    </main>
  );
}
