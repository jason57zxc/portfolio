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

// export const experiencesData = {
//     en: [
//         {
//             id: "",
//             title: "Education",
//             location: "Chung Yuan Christian University, Taoyuan",
//             description:
//                 "I graduated with a bachelor’s degree in Information Management.",
//             icon: React.createElement(LuGraduationCap),
//             date: "2016 - 2019",
//         },
//         {
//             title: "Full-Stack Developer",
//             location: "GoldenUp Information, Taipei",
//             description:
//                 "Developed and maintained a restaurant POS management system.",
//             icon: React.createElement(FaReact),
//             date: "2021 - 2023",
//         }
//     ],
//     zh: [
//         {
//             title: "學士",
//             location: "中原大學",
//             description:
//                 "畢業於資訊管理學系。",
//             icon: React.createElement(LuGraduationCap),
//             date: "2016 - 2019",
//         },
//         {
//             title: "軟體開發工程師",
//             location: "金旭資訊",
//             description:
//                 [
//                     "開發及維護餐飲POS管理系統、QR Code點餐",
//                     "開發及維護購物網站、協助串接第三方電子票券API",
//                     "整合WebSocket技術，實現即時叫號功能",
//                     "優化網頁速度與效能，提高用戶體驗",
//                     "開發系統後端API及撰寫相關文件"
//                 ],
//             icon: React.createElement(FaReact),
//             date: "2021 - 2023",
//         }
//     ]
// {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//         "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
// },
// {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//         "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
// },


export const projectsData = [
    {
        id: "qrcode",
        title: "title",
        description: "description",
        tags: ["ASP.NET(VB.NET)", "JavaScript", "jQuery", "Bootstrap", "SQL Server"],
        imageUrl: qrcodeOrdering,
    }
] as const;

// export const projectsData = [
//     "corpComment", "rmtDev", "wordAnaly"
// ] as const;


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