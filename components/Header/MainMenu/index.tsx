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
import { SHEET_PLATAFORMS, SHEET_STACKS } from "@/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";

export const MainMenu = ({ className }: { className?: string }) => {
  return (
    <Sheet key={"right"}>
      <SheetTrigger asChild className={className}>
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
