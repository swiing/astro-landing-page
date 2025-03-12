import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export type NavigationMenuProps = {
  children: any
  item?: any
}

export function ReactNavigationMenu({children, item}: NavigationMenuProps) {
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
        <NavigationMenuItem className="font-bold flex">
          {item}
        </NavigationMenuItem>
        {children}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
