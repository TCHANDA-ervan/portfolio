"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Conception d'un Site Web sous WordPress",
    description: 
      "Conception, développement et optimisation d'un site web sur WordPress, incluant la définition des objectifs, la personnalisation du thème, l'intégration de fonctionnalités comme le blog, l'e-commerce ou un portfolio, ainsi que l'optimisation SEO, la sécurisation et l'amélioration des performances.",
    href: "https://visite-sahara.com/",
    target: "_blank",
  },
  
  {
    num: "02",
    title: "Conception et Développement d'un Back-Office Web",
    description:
      "Développement d'une plateforme web en Angular pour la gestion des utilisateurs et des données de l'application mobile. Conception d'APIs REST pour gérer les fonctionnalités CRUD, optimisation des requêtes SQL et création de tableaux de bord analytiques pour le suivi des indicateurs clés.",
    href: "https://github.com/TCHANDA-ervan/Pointeuse/",
    target: "_blank",
  },
  {
    num: "03",
    title: "Développement d'une Application Mobile",
    description: 
      "Développement d'une application mobile en **C#** avec une **API REST** pour une intégration fluide. Amélioration des fonctionnalités de paiement sécurisé, résolution de problèmes critiques, et renforcement de la fiabilité des transactions. Tests de validation sur **Android** et **iOS** pour assurer la stabilité et la performance.", 
    href: "",
  },
 {
  num: "04",
  title: "Projet BI & Big data",
  description:
    "Création et automatisation de **tableaux de bord interactifs** avec **Tableau** et **Power BI** pour le suivi des **KPI**. Extraction et analyse de données volumineuses à l'aide de **requêtes SQL complexes**. Réalisation d'analyses statistiques et de **modélisation prédictive** pour anticiper les comportements clients. Automatisation de tâches répétitives avec **Python** pour optimiser les processus et améliorer l'efficacité. Collaboration étroite avec les équipes métiers pour garantir l'alignement avec les objectifs stratégiques de l'entreprise.",
  href: "",
},
{
  num: "05",
  title: " Outil de Gestion des Congés et Absences",
  description:
    "Développement d'un outil de gestion des congés et absences, avec une analyse fonctionnelle approfondie pour définir les besoins des utilisateurs et les fonctionnalités clés. Création d'un **calendrier dynamique** couvrant la période du 1er septembre au 3 août, intégration des jours fériés et vacances scolaires via les **APIs gouvernementales**. Fonctionnalités incluses : ajout, suppression et modification des jours de congé pour chaque salarié. Les données sont stockées au format **JSON** pour une gestion optimisée. Le projet a été développé avec **HTML**, **CSS**, **PHP**, **JavaScript**, **React.js** et **Node.js**.",
  href: "",
},
{
  num: "06",
  title: "Gestion de Projet",
  description: 
    "Objectif : Gérer des projets en utilisant l'expérience et les compétences acquises lors des cours de Gestion des Services. Les missions incluent la proposition d'un **planning projet** basé sur les informations disponibles (MP, Excel, PP, autres), la **gestion des risques**, ainsi que l'élaboration d'une **matrice RACI** pour identifier les rôles et responsabilités de l'équipe. Une phase d'audit a également été réalisée pour évaluer le projet et garantir sa bonne progression, suivie de la création d'une **fiche de poste** détaillant les responsabilités et tâches spécifiques des membres de l'équipe.",
  href: "",
},
{
  num: "07",
  title: "Développement d'une Plateforme d'Émargement Électronique",
  description: 
    "Réalisation d'un projet individuel dans le cadre d'une Épreuve Certifiante visant à dématérialiser l’émargement des élèves alternants à l'école 3iL via un écosystème applicatif complet. Le projet inclut : une **application mobile** avec authentification sécurisée via **Azure AD**, QR codes dynamiques et géolocalisation pour prévention de la fraude ; une **borne embarquée** sur **Raspberry Pi** pour scanner les QR codes ; une **API REST sécurisée** pour la gestion centralisée des données ; un **tableau de bord web** pour la gestion des émargements et alertes ; un **outil d'administration desktop** pour la supervision du système. Stratégies anti-fraude intégrées, gestion des versions via **Git/GitLab**, et rédaction de tests unitaires et d'intégration. Technologies utilisées : **.NET (C#, ASP.NET Core, Xamarin/MAUI)**.",
  href: "",
},
{
  num: "08",
  title: "Développement d'une Application et Site E-commerce",
  description: 
    "Participation au développement complet d'une application et d'un site web E-commerce avec la création de fonctionnalités backend telles que l'**ajout**, la **suppression** et la **modification de produits**. Contribution aux **réunions d'équipe**, apportant une expertise technique pour le choix des outils et la conception de l'architecture. Analyse des besoins clients selon la méthode **Merise** et définition du **cahier des charges**. Mise en place de la **base de données sous MySQL** et réalisation des **interfaces utilisateur avec Bootstrap**. Environnement technique utilisé : **Postman**, **MySQL**, **Laravel**.",
  href: "",
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
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
          transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
        href={service.href}
        passHref
        className="w-[70px] h-[70px] rounded-full bg-white group-hover:text-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
        target="_blank"  // Ouvre le lien dans un nouvel onglet
      >
                     
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none texte-white group-hover:text-green-500 transition-all duration-500">
                  {service.title}
                </h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
