import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { iForm } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string().min(2, {
    message: "subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});
type iKey = "message" | "name" | "email" | "subject";
export function ContactForm({ formnames }: { formnames: iForm }) {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const parsed = formSchema.parse(values);

    fetch("/api/contact", {
      body: JSON.stringify(parsed),
      method: "POST",
    }).then((resp) => {
      if (resp.status == 202) {
        toast({
          variant: "success",
          title: "success! Email sended. ",

          // description: "There was a problem with your request.",
        });
      }
    });
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border p-4 rounded-lg"
      >
        {Object.keys(formnames).map((key: string) => {
          const newKey: iKey = key as iKey;
          if (formnames[newKey].type !== "button")
            return (
              <div
                className="flex w-[full]  justify-between items-center gap-0"
                key={newKey}
              >
                <FormField
                  control={form.control}
                  name={newKey}
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormLabel>{formnames[newKey].label}:*</FormLabel>
                      <FormControl>
                        {formnames[newKey].type == "text" ? (
                          <Input
                            placeholder={formnames[newKey].placeholder}
                            {...field}
                          />
                        ) : (
                          <Textarea
                            placeholder={formnames[newKey].placeholder}
                            {...field}
                            rows={6}
                          />
                        )}
                      </FormControl>
                      {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
        })}

        <Button type="submit">{formnames.submit.placeholder}</Button>
      </form>
    </Form>
  );
}
