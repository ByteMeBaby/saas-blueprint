"use client";

import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export function TopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="flex flex-col justify-between h-full rounded-md">
                  <div className="flex items-center">
                    {/* <Image */}
                    {/*   width={36} */}
                    {/*   height={36} */}
                    {/*   src={ */}
                    {/*     (session?.data?.user?.image as string) || */}
                    {/*     "https://avatars.githubusercontent.com/u/65569978?v=4" */}
                    {/*   } */}
                    {/*   alt="User Image" */}
                    {/*   className="rounded-full" */}
                    {/* /> */}
                    <div className="flex flex-col ml-2">
                      <div className="mb-0 leading-none">
                        {/* {displayName ? displayName : "Anonymous"} */}
                      </div>
                      <div className="text-xs text-gray-500 leading-none">
                        {/* {email} */}
                      </div>
                    </div>
                  </div>

                  <div className="ml-3 cursor-pointer">
                    <span
                      className="flex items-center w-full justify-end pb-3"
                      // onClick={() => signOut()}
                    >
                      <FaPowerOff />
                      &nbsp;Signout
                    </span>
                  </div>
                </div>
              </li>
              <ListItem href="/docs" title="Menu Item">
                Some details here
              </ListItem>
              <ListItem href="/docs/installation" title="About me">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="About SaaS Blueprint"
              >
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default TopNavigation;
