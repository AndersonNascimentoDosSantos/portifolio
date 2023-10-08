import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-8 w-[full]">
      <div className="grid grid-cols-2 grid-rows-1 h-[full] gap-5">
        <section className="flex border h-[full] flex-col flex-grow">
          <ContactForm />
        </section>
        <section>stack slide</section>
      </div>
    </main>
  );
}
