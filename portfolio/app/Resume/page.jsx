"use client"

import{
  FaHtml5,
 FaCss3,
 FaReact,
 FaFigma,
 FaNodeJs,
} from "react-icons/fa";

import{SiTailwindcss , SiNextdojs} from "react-icons/si";

const about = {
  title : 'About me',
  description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, veritatisquaerat! Ab, harum ipsum! Voluptatibus repellat quibusdam inventore maxime rem.',
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
        fieldValue: "5+ Ans"
        },
        {
          fieldName: "Langue",
          fieldValue: "Français , Anglais"
          },
        {
          fieldName: "linkedil",
          fieldValue: "TCHANDA-Junior"
          },
          {
            fieldName: "Email",
            fieldValue: "tchandashanda@gmail.com"
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
  description : ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo, incidunt consequuntur dolore ipsum sit ipsa accusamus assumenda similique odio.',
  items: [
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
    {
      company: "SDH",
      Position : "Developpeur ",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc",
      Position : "Developpeur Digital",
      duration: "2022 - present",
    },
  ]
};


// education
const education = {
  icon : '',
  title : 'MES FORMATIONS',
  description : ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo, incidunt consequuntur dolore ipsum sit ipsa accusamus assumenda similique odio.',
  items: [
    {
      institution: "3il ingenieur",
      degree : "Bachelor",
      duration: "2022 - present",
      Formation: "CS2I",
    },
    {
      institution: "3il ingenieur",
      degree : "Bachelor",
      duration: "2022 - present",
    },
    {
      institution: "3il ingenieur",
      degree : "Bachelor",
      duration: "2022 - present",
    },
    {
      institution: "3il ingenieur",
      degree : "Bachelor",
      duration: "2022 - present",
    },
  ]
};

// SKILLS
const skills = {
  title : 'MES skills',
  description : ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo, incidunt consequuntur dolore ipsum sit ipsa accusamus assumenda similique odio.',
  skillList: [
    {
      icon : '<FaHtml5 />',
      name : "html 5 "
    },
    {
      icon : '<FaCss3 />',
      name : "html 5 "
    },
    {
      icon : '<FaJs />',
      name : "html 5 "
    },
    {
      icon : '<FaReact />',
      name : "html 5 "
    },
    {
      icon : '<SiNextdotjs />',
      name : "html 5 "
    },
    {
      icon : '<SiTailwindcss />',
      name : "html 5 "
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
<TabsTrigger value="skills">Skills</TabsTrigger>
<TabsTrigger value="experience">Experience</TabsTrigger>
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
<ScrollArea className="h-[400px]">
<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
{experience.items.map((item, index) => {
return (
<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
<span className="text-green-500">{item.duration}</span>
<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:tet-left">{item.Position}</h3>
<div className="flex items-center gap-3">
{/*dot*/}
<span className="w-[6px] h-[6px] rounded-full bg-green-500"></span>
<p className="text-white/60">{item.company}</p>
</div>
</li>
);
})}
</ul>
</ScrollArea>
</div>
</TabsContent>


{/*education*/}
<TabsContent value="education" className="w-full">
  education
</TabsContent>


{/*skills*/}
<TabsContent value="skills" className="w-full">
  skills
</TabsContent>


{/*Contact*/}
<TabsContent value="Contact" className="w-full">
  Contact
</TabsContent>
</div>
</Tabs>
</div>
</motion.div>
  );
};
  export default Resume;

 