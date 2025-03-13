import { useState } from "react";
import {
  Sheet as ReactSheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../Button.astro";

export interface RouteProps {
  href: string;
  label: string;
}

export const Sheet: React.FC<{ routeList: RouteProps[]; }> = ({routeList}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <ReactSheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger className="px-2">
        <Menu
            className="flex md:hidden h-5 w-5"
            onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Menu Icon</span>
        </Menu>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">
          Astro/Tailwind
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center gap-2 mt-4">
          {routeList.map(({ href, label }: RouteProps) => (
          <a
              rel="noreferrer noopener"
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ variant: "ghost" })}
          >
              {label}
          </a>
          ))}
          <a
          rel="noreferrer noopener"
          href="https://github.com/swiing/astro-landing-page.git"
          target="_blank"
          className={`w-[110px] border ${buttonVariants({
              variant: "secondary",
          })}`}
          >
          <GitHubLogoIcon className="mr-2 w-5 h-5" />
          Github
          </a>
        </nav>
      </SheetContent>
    </ReactSheet>
  )
}