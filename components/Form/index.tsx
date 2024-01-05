"use client";

import { iForm } from "@/app/[lang]/dictionaries";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "../Commoms/ContactForm";

export default function FormContact({ formnames }: { formnames?: iForm }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeY_64oAAAAAIBNMpizz4jC3VBN0AEhsR1vRIv_">
      {formnames && <ContactForm {...{ formnames }} />}
    </GoogleReCaptchaProvider>
  );
}
