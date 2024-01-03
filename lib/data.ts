import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import qrcodeOrdering from "@/public/qrcodeOrdering.jpeg";

export const locales = ['zh', 'en'] as const

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
        id: "edu",
        title: "title",
        location: "location",
        description: "description",
        icon: React.createElement(LuGraduationCap),
        date: "2016 - 2019",
    },
    {
        id: "goldenup",
        title: "title",
        location: "location",
        description: [
            "d_list1",
            "d_list2",
            "d_list3",
            "d_list4",
            "d_list5"
        ],
        icon: React.createElement(FaReact),
        date: "2021 - 2023",
    }
] as const;

export const projectsData = [
    {
        id: "qrcode",
        title: "title",
        description: "description",
        tags: ["ASP.NET(VB.NET)", "JavaScript", "jQuery", "Bootstrap", "SQL Server"],
        imageUrl: qrcodeOrdering,
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "VB.net",
    "C#",
    "SQL Server",
] as const;