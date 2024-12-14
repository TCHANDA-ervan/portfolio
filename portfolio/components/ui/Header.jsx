import Link from "next/link";
import { Button } from "./button";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            TCHANDA Junior <span className="text-green-500">.</span>
          </h1>
        </Link>
         {/* nav */}
         <Nav/>
      </div>
    </header>
  );
};

export default Header;
