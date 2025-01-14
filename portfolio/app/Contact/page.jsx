"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Télephone",
    Description: "(+33) 758 739 686",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "tchandashanda@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adrdress",
    Description: "149 rue Stalingrad Grenoble 38130",
  },
];

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-green-500">Travaillons ensemble</h3>
              <p className="text-white/60">
              Je suis à votre disposition pour mettre mes compétences au service de equipe ,Curieux et déterminé, à apprendre, évoluer et contribuer activement aux projets.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prenom" />
                <Input type="lastname" placeholder="Nom" />
                <Input type="email" placeholder="Email " />
                <Input type="phone" placeholder="Télephone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Developpeur web</SelectItem>
                    <SelectItem value="cst">Data analyst</SelectItem>
                    <SelectItem value="mst">Chef projet</SelectItem>
                    <SelectItem value="msto">FullStack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <textarea 
  className="h-[200px] w-full bg-primary text-white placeholder-white/60 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
  placeholder="La fonctionnalité d'envoi de message n'est pas activée. Vous pouvez me contacter par e-mail ou m'appeler directement. Merci Cordialement " 
/>
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1
xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-
[#27272c] text-green-500 rounded-md flex items-center
justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
