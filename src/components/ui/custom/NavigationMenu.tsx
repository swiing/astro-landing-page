import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const ReactNavigationMenu: React.FC<{
  children: any
  item?: any
}> = ({children, item}) => {
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
