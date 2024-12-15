import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/photo";
import Social from "@/components/ui/Social";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
  xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Developpeur fullstack</span>
            <h1 className="h1 mb-6">
              Hello je suis <br />{" "}
              <span className="text-green-500">Junior TCHANDA</span>
            </h1>
            <p className="max-w-[500px] mb-9text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* lien vers d'autre page */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
  variant="outline"
  size="lg"
  className="
    uppercase flex items-center gap-2 
    border border-accent text-accent 
    hover:bg-green-500 hover:text-white 
    transition-all duration-500
  "
>
  <span>Download CV</span>
  <FiDownload className="text-xl" />
</Button>

              <div className="mb-8 xl:mb-0">
                <Social
                 containerStyles="flex gap-6"
                 iconStyles="
                     w-9 h-9 border border-accent rounded-full 
    flex justify-center items-center 
    text-accent text-base 
    hover:bg-green-500 hover:text-white
    transition-all duration-500
  "
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
