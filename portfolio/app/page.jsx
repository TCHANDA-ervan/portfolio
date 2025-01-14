import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
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
            <span className="text-xl">Développeur Fullstack | Data Analyst | Chef de Projet</span>
            <h1 className="h1 mb-6">
              Hello je suis <br />{" "}
              <span className="text-green-500">Junior TCHANDA</span>
            </h1>
            <p className="max-w-[500px] mb-9text-white/80">
            Avec une passion pour l'innovation numérique, je combine mes compétences en développement web, analyse de données et gestion de projets pour créer des solutions complètes et stratégiques. Que ce soit pour concevoir des applications intuitives, exploiter des données pour prendre des décisions éclairées, ou coordonner des équipes pour atteindre les objectifs d’un projet, je suis dédié à offrir des résultats de qualité, alliant performance et efficacité.
            </p>
            {/* lien vers d'autre page */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
      href="portfolio\public\CV_2025-01-14_Junior Ervan_TCHANDA SHANDA.pdf"  // Remplacez ceci par le chemin réel de votre fichier PDF
      download="CV_TCHANDA_Junior.pdf"  // Nom du fichier téléchargé
      target="_blank" 
    >
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
    </a>

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
      <Stats/>
    </section>
  );
};

export default Home;
