import Link from "next/link";
import { Button } from "./button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            TCHANDA Junior <span className="text-green-500">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="  hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          
            <Button>Hire me</Button>
          </Link>
        </div>
         {/* mobile nav */}
         <div className="xl:hidden">mobile nav </div>
      </div>
    </header>
  );
};

export default Header;