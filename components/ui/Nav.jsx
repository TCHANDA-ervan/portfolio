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
        name : "Resume",
        path: "/Resume",
    },
   /* {
        name : "Work",
        path: "/Work",
    },*/
    {
        name : "Contact",
        path: "/Contact",
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
                && "text-green-500 border-b-2 border-accent-DEFAULT "
                
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    );
  };
  
  export default Nav;