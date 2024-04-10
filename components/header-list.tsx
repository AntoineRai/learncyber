"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const HeaderList = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink>Testimonial</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink>Hero Structure</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink>Contact</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink>Module</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
};

export default HeaderList;