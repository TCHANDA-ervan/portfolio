"use client";

import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num : '01',
    title : 'Web Development',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit quasi, explicabo aperiam suscipit eos.',
    href : ""
  },
  {
    num : '02',
    title : 'application mobile',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit quasi, explicabo aperiam suscipit eos.',
    href : ""
  },
  {
    num : '03',
    title : 'Big DATA',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit quasi, explicabo aperiam suscipit eos.',
    href : ""
  },
  {
    num : '04',
    title : 'Data analyst',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit quasi, explicabo aperiam suscipit eos.',
    href : ""
  },
  {
    num : '05',
    title : 'Gestion de projet',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit quasi, explicabo aperiam suscipit eos.',
    href : ""
  },
];


import { motion } from "framer-motion";
const Services = () => {
return (
<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
<div className="container mx-auto">
<motion.div
initial={{ opacity: 0 }}
animate={{
opacity: 1,
transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
}}
className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
>
  {services.map((service, index) =>{
    return (
      <div key={index} 
      className="flex-1 flex flex-col justify-center gap-6 group">
        {/*top*/}
        <div className="w-full flex justify-between items-center">
          <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
          transition-all duration-500">{service.num}</div>
          <Link href={service.href}
          className="w-[70px] h-[70px] rounded-full bg-white group-hover:text-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
          <BsArrowDownRight className="text-primary text-3xl" />
          </Link>
        </div>
         {/*title*/}
         <h2>{service.title}</h2>
           {/*description*/}
           <p>{service.description}</p>
             {/*border*/}
         <div className="border-b border-white/20 w-full"></div>
      </div>
    )
  })}
</motion.div>
</div>
</section>
);
};
  export default Services;