"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// list of links
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Kids",
    href: "/Kids",
  },
];

export default function NavBar() {

    // check active link 
    const pathName=usePathname();


  return (
    <header className=" mb-8 border-b py-5 ">
      <div className="flex items-center justify-between Section">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl  font-bold">
            My<span className="text-primary">Shops</span>
          </h1>
        </Link>
        {/* nav links */}
        <nav className="hidden lg:flex gap-12 ">
          {links.map((link, index) => (
            <Link  key={index} href={link.href} className={pathName==link.href?" text-primary font-semibold text-lg ":"text-muted-foreground transition duration-100 font-medium hover:text-primary"}>
              {link.name}
            </Link>
          ))}
        </nav>
        {/* dark mod button and shopping cart */}
        <div className="flex gap-5 items-center justify-center">
            {/* dark mode button  */}
                <ThemeToggler/>
            {/* cart button  */}
        <Button type="button" variant={'ghost'} size={'icon'} className="hover:text-primary hover:bg-transparent">
            <ShoppingBag/>
        </Button>
            
        </div>
      </div>
    </header>
  );
}
