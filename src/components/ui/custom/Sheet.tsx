import { useState } from "react";
import {
  Sheet as ReactSheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "lucide-static/icons/menu.svg?raw";

import GitHubLogoIcon from "../../../assets/icons/github.svg?raw";

import { buttonVariants } from "../button";

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
        <span className="flex md:hidden [&>svg]:h-5 [&>svg]:w-5" dangerouslySetInnerHTML={{ __html: Menu }}/>
        <span className="sr-only">Menu Icon</span>
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
          <div className="mr-2 w-5 h-5" dangerouslySetInnerHTML={{ __html: GitHubLogoIcon }} />
          Github
          </a>
        </nav>
      </SheetContent>
    </ReactSheet>
  )
}