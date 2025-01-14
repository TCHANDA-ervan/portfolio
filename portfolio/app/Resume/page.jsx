"use client"

import{
FaHtml5,
 FaCss3,
 FaReact,
 FaFigma,
 FaNodeJs,
} from "react-icons/fa";

import{SiNextdotjs,SiPhp, SiMysql,  SiAngular } from "react-icons/si";
import { DiNetmagazine,DiDatabase , DiGithubBadge , DiPython,  DiBootstrap} from "react-icons/di";

const about = {
  title : 'About me',
  description : 'Je suis à votre disposition pour mettre mes compétences au service de equipe ,Curieux et déterminé,  à apprendre, évoluer et contribuer activement aux projets',
  info : [
    {
    fieldName: "Name",
    fieldValue: "TCHANDA Junior"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33) 758 739 686"
      },
      {
        fieldName: "Experiences",
        fieldValue: "3+ Ans"
        },
        {
          fieldName: "Langue",
          fieldValue: "Français , Anglais"
          },
        {
          fieldName: "linkedin",
          fieldValue: "junior-ervan-tchanda-shanda"
          },
          {
            fieldName: "Email",
            fieldValue: "tchandashandaj@gmail.com"
            },
            {
            fieldName: "Github",
            fieldValue: "TCHANDA-ervan"
            },

  ]
}
// experience
const experience = {
  icon : '',
  title : 'Mon experience',
  description : 'Au fil des années, j’ai appris, évolué et monté en compétences dans des domaines clés du développement et de la gestion de projet. Chaque expérience m’a permis de renforcer mes savoir-faire et d’approfondir ma compréhension des enjeux technologiques, me préparant ainsi à relever des défis toujours plus complexes.',
  items: [
    {
      company: "SDH (Grenoble, France)",
      Position : "Stage Developpeur Digital",
      duration: "Sept 2023 - Mars 2024",
    },
    {
      company: "SDH (Grenoble, France)",
      Position : "Alternant Developpeur application",
      duration: "Sept 2022 - Sept 2023",
    },
    {
      company: "Projet personel",
      Position : "Projet BI",
      duration: "2024",
    },
    {
      company: "Creative Sarl",
      Position : "Stage Chef projet",
      duration: "Mai 2023 - juillet 2023",
    },
    {
      company: "Jumbo",
      Position : "Stage Dev",
      duration: "Juin 2022 - Aout 2022",
    },   
   
  ]
};


// education
const education = {
  icon : '',
  title : 'MES FORMATIONS',
  description : ' Un parcours de formation complet, combinant le développement logiciel, la gestion de projet et l’analyse de données, me permettant de concevoir des solutions innovantes et de piloter efficacement des projets techniques.',
  items: [
    {
      institution: "3il ingenieur",
      degree : "Management solution digitales et data",
      duration: "2022 - 2024",
      Formation: "Master 1 & 2",
    },
    {
      institution: "IUC ",
      degree : "Conception des Systemes Informatique",
      duration: "2021 - 2022",
      Formation: "Bachelor",
    },
    {
      institution: "IUC",
      degree : "PREPA Ingenieur 3IL",
      duration: "2019 - 2021",
      Formation: "Niveau 1 & 2",
    },
    {
      institution: "College CBO",
      degree : "Baccalaureat scientifique",
      duration: "2018 - 2019",
      Formation: "BAC S",
    },
    
  ]
};

// SKILLS
const skills = {
  title: 'MES skills',
  description: 'Maîtriser des technologies variées et m’adapter aux nouveaux outils sont des atouts qui me permettent de relever des défis techniques avec efficacité. Que ce soit dans le développement web, la gestion de bases de données ou la création d’applications, mes compétences en HTML, CSS, JavaScript, C#, et bien d’autres, sont le socle sur lequel je bâtis des solutions innovantes et performantes',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <DiDatabase />,
      name: "Database"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
   
    {
      icon: <SiPhp />,
      name: "PHP"
    },
    {
      icon: <SiMysql />,
      name: "SQL"
    },
    {
      icon: <SiAngular />,
      name: "Angular"
    },
    {
      icon: <  DiNetmagazine />,
      name: "C#"
    },
    {
      icon: <  DiPython />,
      name: "Python"
    },
    {
      icon: <  DiGithubBadge />,
      name: "Git"
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from "@/components/ui/tooltip";

import {motion} from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
const Resume = () => {
  return (
<motion.div
initial={{ opacity: 0}}
animate={{
opacity: 1,
transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
}}
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
<div className="container mx-auto">
<Tabs
defaultValue="experience"
className="flex flex-col xl:flex-row gap-[60px]">
<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
gap-6">
<TabsTrigger value="education">Education</TabsTrigger>
<TabsTrigger value="experience">Experience</TabsTrigger>
<TabsTrigger value="skills">Skills</TabsTrigger>
<TabsTrigger value="Contact">About me</TabsTrigger>
</TabsList>

{/*content*/}
<div className="min-h-[70vh] w-full">
{/*experience*/}
<TabsContent value="experience" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
<h3 className="text-4xl font-bold">{experience.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
{experience.description}
</p>
<ScrollArea className="h-[500px]">
  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
    {experience.items.map((item, index) => (
      <li key={index} className="bg-[#232329] h-[300px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
        <span className="text-green-500">{item.duration}</span>
        <h3 className="text-xl max-w-[280px] min-h-[80px] text-center lg:text-left">{item.Position}</h3>
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-green-500"></span>
          <p className="text-lg font-bold text-yellow-400 mt-4 p-2 bg-[#353535] rounded-md">{item.company}</p>
        </div>
      </li>
    ))}
  </ul>
</ScrollArea>

</div>
</TabsContent>


{/*education*/}
<TabsContent value="education" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
<h3 className="text-4xl font-bold">{education.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
{education.description}
</p>
<ScrollArea className="h-[500px]">
  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
    {education.items.map((item, index) => (
      <li key={index} className="bg-[#232329] h-[300px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
        <span className="text-green-500">{item.duration}</span>
        <h3 className="text-xl max-w-[280px] min-h-[80px] text-center lg:text-left">{item.degree}</h3>
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-green-500"></span>
          <p className="text-white/60">{item.institution}</p>
        </div>
        {item.Formation && (
          <p className="text-lg font-bold text-yellow-400 mt-4 p-2 bg-[#353535] rounded-md">
            {item.Formation}
          </p>
        )}
        
      </li>
    ))}
  </ul>
</ScrollArea>
</div>
</TabsContent>


{/*skills*/}
<TabsContent value="skills" className="w-full h-full">
<div className="flex flex-col gap-[30px]">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
<h3 className="text-4xl font-bold">{skills.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
{skills.description}
</p>
</div>
<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[10px]">
  {skills.skillList.map((skill, index) => (
    <li key={index}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[200px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-2xl group-hover:text-green-500 transition-all duration-300">
              {skill.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{skill.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  ))}
</ul>

</div>
</TabsContent>


{/*Contact*/}
<TabsContent
value="Contact"
className="w-full text-center xl:text-left">
<div className="flex flex-col gap-[30px]">
<h3 className="text-4xl font-bold">{about.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
{about.description}
</p>
<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
mx-auto xl:mx-0">
{about.info.map((item, index) => {
return (
<li key={index} className="flex items-center justify-center
xl:justify-start gap-4">
<span className="text-white/60">{item.fieldName}</span>
<span className="text-xl">{item.fieldValue}</span>
</li>
);
})}
</ul>
</div>
</TabsContent>
</div>
</Tabs>
</div>
</motion.div>
  );
};
  export default Resume;

 