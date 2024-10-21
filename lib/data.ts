import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fagforbundetImg from "@/public/fagforbundet.png";
import instabankImg from "@/public/instabank.png";
import lumiSyncImg from "@/public/lumisync.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fagforbundet member",
    description:
      "I worked as an iOS-developer on this membership app for a Norwegian union. It gives access to information about your membership and agreements.",
    tags: ["Swift", "UIKit", "Eureka", "Firebase"],
    imageUrl: fagforbundetImg,
  },
  {
    title: "Instabank app",
    description:
      "I worked as a part-time iOS-developer on this project. It is a banking app. You get a full overview, self-service and easy login with Touch ID or Face ID.",
    tags: ["Swift", "WebView", "SwiftUI", "UIKit"],
    imageUrl: instabankImg,
  },
  {
    title: "LumiSync",
    description:
      "Bachelor project. I worked as a front-end developer on this project. It is a sync-application syncing data between different systems with a dashboard for admin.",
    tags: ["React", "Typescript", "Tailwind", "Ruby on Rails"],
    imageUrl: lumiSyncImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Swift",
  "SwiftUI",
  "UIKit",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Flutter",
  "Dart",
  "Vue",
  "MongoDB",
  "Firebase",
  "Core Data",
  "Jest",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
] as const;
