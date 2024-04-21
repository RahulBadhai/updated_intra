import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"


export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/bars-solid.svg" width={30} height={30} alt={"bar-icon"} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <Card className="w-[250px] sm:min-w-80 shadow-md mt-5 mx-2">
              {/* <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader> */}
              <CardContent className="py-3 px-0">
                <div className="flex items-center justify-around">
                  <Avatar className="mx-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <div className="text-start px-2">
                    <p className="font-bold">Mr. Rahul Badhai</p>
                    <p>Sr. Software Developer </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <NavigationMenu >
            <NavigationMenuList >
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref >
                  <NavigationMenuLink  className={`${navigationMenuTriggerStyle()} min-w-[250px] sm:min-w-80`}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="hover:z-20">
            <NavigationMenuList className="min-w-[250px] sm:min-w-80">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="min-w-[250px]  sm:min-w-80">UAM</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-[250px] sm:min-w-80">
                    <ListItem href="#" title="Add user">
                    </ListItem>
                    <ListItem href="#" title="Assign Permission">
                    </ListItem>
                    <ListItem href="#" title="Activity Logs">
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu >
          <NavigationMenu className="hover:z-20">
            <NavigationMenuList className="min-w-[250px] sm:min-w-80">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="min-w-[250px]  sm:min-w-80">User</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-[250px] sm:min-w-80">
                    <ListItem href="#" title="Add user">
                    </ListItem>
                    <ListItem href="#" title="Assign Permission">
                    </ListItem>
                    <ListItem href="#" title="Activity Logs">
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
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
            " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
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
  )
})
ListItem.displayName = "ListItem"