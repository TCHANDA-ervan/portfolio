"use client";


import Link from "next/link";
import { usePathname} from "next/navigation";

const links = [
    {
        name : "home",
        path: "/",
    },
    {
        name : "Services",
        path: "/Services",
    },
    {
        name : "resume",
        path: "/resume",
    },
    {
        name : "work",
        path: "/work",
    },
    {
        name : "contact",
        path: "/contact",
    },
   
];
const Nav = () => {
    const pathname = usePathname();  // Correctement obtenir le pathname
  
    return (
      <nav className="flex gap-8">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                && "text-accent-DEFAULT border-b-2 border-accent-DEFAULT "
                
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    );
  };
  
  export default Nav;