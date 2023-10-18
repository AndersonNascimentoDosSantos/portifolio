"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { Textarea } from "../../ui/textarea";

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
  // 1. Define your form.
  const { reset, ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const { executeRecaptcha } = useGoogleReCaptcha();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const parsed = formSchema.parse(values);
    if (!executeRecaptcha) {
      toast.error("Não foi possível validar o captcha");
      return;
    }

    const recaptchaToken = await executeRecaptcha();

    try {
      const { data: captchaResponse } = await axios.post("/api/recaptcha", {
        token: recaptchaToken,
      });

      if (captchaResponse.data.success) {
        axios.post("/api/contact", values).then((resp) => {
          if (resp.status == 202) {
            toast.success("success! Email sended. ");
            reset();
          }
        });

        // toast.success("Formulário enviado com sucesso!");
      } else {
        toast.error(
          "Não foi possível enviar o formulário. Por favor, verifique que vocé não é um robô."
        );
      }
    } catch (error) {
      toast.error("Não foi possível enviar o formulário.");
    }

    // console.log(values);
  }

  return (
    <Form {...{ ...form, reset }}>
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
