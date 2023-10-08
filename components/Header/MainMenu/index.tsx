"use client";

import { AnchorButton } from "@/components/Commoms/Anchor";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
const SHEET_STACKS: { [key: string]: string[] } = {
  MOBILE: ["JAVA", "KOTLIN", "REACTNATIVE"],
  BACKEND: ["NODE", "PHP", "LARAVEL", "NESTJS"],
  FRONTEND: [
    "NEXTJS",
    "REACTJS",
    "HTML/CSS/JS",
    "TAILWIND",
    "STYLEDCOMPONET",
    "STICHES",
  ],
};
const SHEET_PLATAFORMS = ["MOBILE", "FRONTEND", "BACKEND"];
// type SheetSide = (typeof SHEET_SIDES)[number];

export const MainMenu = () => {
  return (
    <Sheet key={"right"}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <GiHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Stacks</SheetTitle>
          <SheetDescription>{/**description */}</SheetDescription>
        </SheetHeader>
        {SHEET_PLATAFORMS.map((plataform) => (
          <Sheet key={"right"}>
            <SheetTrigger asChild className="w-full m-1 flex  justify-start">
              <Button variant="link">{plataform}</Button>
            </SheetTrigger>
            <SheetContent side={"right"} className="flex flex-col">
              <SheetHeader>
                <SheetTitle>{plataform}</SheetTitle>
                <SheetDescription>{/**description */}</SheetDescription>
              </SheetHeader>
              {SHEET_STACKS[plataform].map((stack, index) => (
                <AnchorButton
                  key={index}
                  className="w-[50%]"
                  variant={"outline"}
                >
                  {stack}
                </AnchorButton>
              ))}
            </SheetContent>
          </Sheet>
        ))}

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};
