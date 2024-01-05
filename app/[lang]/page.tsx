"use client";
import Contact from "@/components/newPortifolioComp/Contact/Contact";
import Experience from "@/components/newPortifolioComp/Experience/Experience";
import Footer from "@/components/newPortifolioComp/Footer/Footer";
import Intro from "@/components/newPortifolioComp/Intro/Intro";
import Services from "@/components/newPortifolioComp/Services/Services";
import { useTheme } from "next-themes";

export default function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const { data: dict } = useSWR(lang, getDictionary);
  // const dict = await getDictionary(lang);
  const { theme } = useTheme();
  return (
    <main className="container mx-auto mt-28 max-sm:mt-20">
      <div
        style={{
          background: theme ? "black" : "",
          color: theme ? "white" : "",
        }}
      >
        {/* <Navbar /> */}
        <Intro />
        <Services />
        <Experience />
        {/* <Works /> */}
        {/* <Portfolio /> */}
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
      {/* <div className="h-[full] gap-5 flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 ">
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
      </div> */}
    </main>
  );
}
