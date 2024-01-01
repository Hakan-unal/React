import {
   DemoObjType,
   SkillObjType,
   ProjectObjType,
   CertificateObjType,
   ComponentObjType,
   ArticleObjType,
   StatisticObjType,
   NpmObjType
} from "./types";

export const demos: Array<DemoObjType> = [
   {
      title: "Sort",
      description: "React.js, Antd, TypeScript",
      link: "https://sort-ashen.vercel.app/",
      code: "https://github.com/Hakan-unal/sort",
   },
   {
      title: "Food",
      description: "React.js, Antd, TypeScript",
      link: "https://food-nine-beige.vercel.app/",
      code: "https://github.com/Hakan-unal/food",
   },
   {
      title: "Translator",
      description: "React.js, Antd, TypeScript",
      link: "https://translation-dusky.vercel.app/",
      code: "https://github.com/Hakan-unal/translation",
   },
   {
      title: "ChatGPT Babür",
      description: "OpenAI, Node.js, Express.js React.js, Antd, TypeScript",
      link: "https://babur.vercel.app/",
      code: "https://github.com/Hakan-unal/babur",
   },
   {
      title: "THY Case Study",
      description: "React.js, Antd, TypeScript",
      link: "https://thy-demo-hakan-unal.vercel.app/",
      code: "https://github.com/Hakan-unal/thy-interview",
   },
   {
      title: "Product CRUD Sample",
      description: "React.js, Antd, TypeScript, Axios",
      link: "https://product-shop-pi.vercel.app/",
      code: "https://github.com/Hakan-unal/product-shop",
   },
   {
      title: "Main DB",
      description: "Node.js, Express.js, PostgreSQL, Supabase ",
      link: "https://supabase-puce.vercel.app/",
      code: "https://github.com/Hakan-unal/supabase",
   },
   {
      title: "Pdf Creator",
      description: "Node.js, Express.js, TypeScript",
      link: "https://pdf-generator-pi.vercel.app/",
      code: "https://github.com/Hakan-unal/pdf-generator",
   },
   {
      title: "Poems Creator with QR Code",
      description: "React.js, Antd, TypeScript",
      link: "https://poems-one.vercel.app/",
      code: "https://github.com/Hakan-unal/poems",
   },
   {
      title: "Pet Reminder",
      description: "React.js, Antd, TypeScript",
      link: "https://bot-vitest.vercel.app/",
      code: "https://github.com/Hakan-unal/bot-vitest",
   },
   {
      title: "Memory Game",
      description: "React.js, Antd, TypeScript",
      link: "https://pandora-six-sigma.vercel.app/",
      code: "https://github.com/Hakan-unal/pandora",
   },
   {
      title: "Horoscope",
      description: "React.js, Antd, TypeScript",
      link: "https://horoscope-orcin.vercel.app/",
      code: "https://github.com/Hakan-unal/horoscope",
   },
   {
      title: "Flowers",
      description: "React.js, Canvas, Antd, TypeScript",
      link: "https://flowers-tau.vercel.app/",
      code: "https://github.com/Hakan-unal/flowers",
   },
   {
      title: "Push Notification",
      description: "React.js, Antd, TypeScript",
      link: "https://chat-push-notification-one.vercel.app/",
      code: "https://github.com/Hakan-unal/chatPushNotification",
   },
   {
      title: "Sound Box",
      description: "React.js, Antd, TypeScript",
      link: "https://soundbox-puce.vercel.app/",
      code: "https://github.com/Hakan-unal/soundbox",
   },
   {
      title: "Stefan Zweig Books",
      description: "React.js, Antd, TypeScript",
      link: "https://zweig-books.vercel.app/",
      code: "https://github.com/Hakan-unal/zweig-books",
   },
   {
      title: "Valentine",
      description: "React.js, Antd, JavaScript",
      link: "https://valentine-nu.vercel.app/",
      code: "https://github.com/Hakan-unal/valentine",
   },
   {
      title: "Morphosium Library Demo",
      description: "React.js, Antd, JavaScript",
      link: "https://morphosium-library-demo.vercel.app/login",
      code: "https://github.com/Hakan-unal/morphosium-library-demo",
   },
   {
      title: "No 21 Case",
      description: "React.js, Antd, JavaScript",
      link: "https://no-21-case.vercel.app/",
      code: "https://github.com/Hakan-unal/no-21-case",
   },
   {
      title: "CRU'D Services",
      description: "Firebase, React.js, Antd, JavaScript",
      link: "https://firebase-cru-d-git-main-hakan-unal.vercel.app/",
      code: "https://github.com/Hakan-unal/firebase-CRU-D",
   },
   {
      title: "Ask IP",
      description: "React.js, Antd, JavaScript",
      link: "https://ask-4yywbkzds-hakan-unal.vercel.app/",
      code: "https://github.com/Hakan-unal/ask-ip",
   },
   {
      title: "Exchange Rates",
      description: "React.js, Antd, JavaScript",
      link: "https://exchange-rate-amber.vercel.app/",
      code: "https://github.com/Hakan-unal/Exchange-Rate",
   },
   {
      title: "Invent Analytics Frontend Developer Case",
      description: "React.js, Antd, JavaScript",
      link: "https://invent-demo.vercel.app/",
      code: "https://github.com/Hakan-unal/invent-demo",
   },
   {
      title: "WEG Frontend Case Study",
      description: "Next.js, React.js, GraphQL, Antd, JavaScript",
      link: "https://weg-demo.vercel.app/",
      code: null,
   },
   {
      title: "My Website",
      description: "React.js, Antd, TypeScript",
      link: "https://hakanunal.vercel.app/",
      code: "https://github.com/Hakan-unal/WEG-demo",
   },
   {
      title: "Crud Services",
      description: "Next.js, React.js",
      link: "https://nextjs-chat-lovat-mu.vercel.app/",
      code: "https://github.com/Hakan-unal/nextjs-chat",
   },
   {
      title: "Basic Portfolio",
      description: "Gatsby.js, JavaScript",
      link: "https://gatsbytestportfolio.vercel.app/",
      code: "https://github.com/Hakan-unal/gatsby-portfolio",
   },
   {
      title: "Demo Socket",
      description: "Node.js, Socket.io, JavaScript",
      link: "https://socket-pink.vercel.app/",
      code: "https://github.com/Hakan-unal/socket",
   },
   {
      title: "Arçelik Demo Case",
      description: "Node.js, Express.js, React.js, JavaScript",
      link: "https://arcelik-be.vercel.app/",
      code: "https://github.com/Hakan-unal/arcelik_be",
   },
   {
      title: "Winterfell",
      description: "Next.js, React.js, MongoDB, JavaScript",
      link: "https://winterfell-be.vercel.app/",
      code: "https://github.com/Hakan-unal/winterfell-be",
   },
];

export const skills: Array<SkillObjType> = [
   { name: "Software Development", rate: 4.5 },
   { name: "JavaScript", rate: 4.5 },
   { name: "React.js", rate: 4.5 },
   { name: "React Hooks", rate: 4.5 },
   { name: "TypeScript", rate: 4 },
   { name: "Firebase", rate: 3.5 },
   { name: "Material-UI", rate: 4 },
   { name: "Tailwind CSS", rate: 3 },
   { name: "Antd", rate: 5 },
   { name: "Redux.js", rate: 4 },
   { name: "REST APIs", rate: 4.5 },
   { name: "Cloud Firestore", rate: 3.5 },
   { name: "Next.js", rate: 4 },
   { name: "HTML5", rate: 4.5 },
   { name: "CSS", rate: 4 },
   { name: "React Native", rate: 3.5 },
   { name: "Node.js", rate: 4 },
   { name: "User Interface Design", rate: 4.5 },
   { name: "User Experience", rate: 4.5 },
   { name: "Agile Methodologies", rate: 4 },
   { name: "Object-Oriented Programming", rate: 5 },
   { name: "Search Engine Optimization (SEO)", rate: 4 },
   { name: "Bootstrap", rate: 4 },
   { name: "Docker", rate: 3.5 },
   { name: "JQuery", rate: 3.5 },
   { name: "MongoDB", rate: 4 },
   { name: "Electron.js", rate: 4 },
   { name: "Semantic UI", rate: 4 },
   { name: "Express.js", rate: 4 },
   { name: "Linux", rate: 4 },
   { name: "MetaMask", rate: 4 },
   { name: "web3.js", rate: 4 },
   { name: "Python", rate: 3 },
   { name: "Single Page Application", rate: 4.5 },
];

export const projects: Array<ProjectObjType> = [
   {
      title: "Mobilet",
      description:
         "The project where tickets to cinema, theater, sports competitions and events can be sold ticket. GraphQL, Next.js, React.js were use this project",
      link: "https://mobilet.com/tr",
   },
   {
      title: "Oyak Pratik Öneri",
      description:
         "Project that includes technical indicators of buying or selling funds on the stock market. Next.js, React.js were use this project",
      link: "https://pratikoneri.com",
   },
   {
      title: "Oyak Pratik Analiz",
      description:
         "İt's a fintech project. Project to track and analyze funds in the stock market on charts. Next.js, React.js were use this project",
      link: "https://pratikanaliz.com",
   },
   {
      title: "Oyak Müşteri Edinim",
      description:
         "It's a fintech project that will ensure the management of web application created to attract more users to oyak investment. Next.js, React.js were use this project",
      link: "https://hesap.oyakyatirim.com.tr",
   },
   {
      title: "HDS",
      description:
         "HDS is a tourism project. The have B2B and B2C panel. Tourism agent personnel were use B2B' panel and customer were use B2C panel. Web based project React.js, used",
      link: "https://hds.devtagon.com/",
   },
   {
      title: "Promodex",
      description:
         "Promodex is a blockchain project. I developed PROMO token launchpad. Web3.js, React.js and PostgreSQL were use this project.",
      link: "https://app.promodex.io/",
   },
   {
      title: "Duyuroom",
      description:
         "Duyuroom is a HR management project. The have web, mobil and desktop platform. Project mission employee documents, images, audios and videos share and tracker. React.js, React Native, Electron.js and Firebase were use this project.",
      link: "https://demo.duyuroom.com/",
   },
   {
      title: "OdeonBeds (OTI Holding Outsource Project)",
      description:
         "Consultancy service to OTI holding software team for tourism",
      link: null,
   },
   {
      title: "KFC GIDA",
      description:
         "FC is agriculture project. The have B2B and B2C panel. Kfc personnel used B2B panel and farmer used B2C panel. Web and mobile based project. React.js, React Native were use this project",
      link: "https://apps.apple.com/tr/app/kfc-%C3%BCretici-bilgi-takip/id1586120006?l=tr",
   },
];

export const certificates: Array<CertificateObjType> = [
   { title: "Cenga Project Competition", link: "https://cenga.vercel.app/" },
];

export const components: Array<ComponentObjType> = [
   {
      title: "Custom Transfer",
      description: "React.js, TypeScript",
      link: "https://transfer-nine.vercel.app/",
      code: "https://github.com/Hakan-unal/transfer",
   },
   {
      title: "Custom Translator",
      description: "React.js, Antd, TypeScript",
      link: "https://translation-dusky.vercel.app/",
      code: "https://github.com/Hakan-unal/translation",
   },
   {
      title: "Custom Table",
      description: "React.js, Antd, TypeScript",
      link: "https://custom-table-three.vercel.app/",
      code: "https://github.com/Hakan-unal/Custom-Table",
   },
];
export const articles: Array<ArticleObjType> = [
   {
      title: "Agile Project Management",
      link: "https://agile-roan.vercel.app/",
   },
   {
      title: "SQL-NoSQL Databases",
      link: "https://sql-nosql-hakan-unal.vercel.app/",
   },
   {
      title: "Vercel Application Publish",
      link: "https://vercel-hakan-unal.vercel.app/",
   },
   {
      title: "Create Read Update Delete (CRUD)",
      link: "https://hakanunal-crud.vercel.app/",
   },
   {
      title: "Monolithic vs Microservices Architecture",
      link: "https://monolith-mcroservices.vercel.app",
   },
   {
      title: "What is Single Page Application",
      link: "https://spa-gamma-woad.vercel.app",
   },
   {
      title: "Using the File System Module in Node.js",
      link: "https://file-system-module.vercel.app",
   },
   {
      title: "Math, Date, String and Number Classes in JavaScript",
      link: "https://javascript-class.vercel.app",
   },
];


export const npmPackages: Array<NpmObjType> = [
   {
      title: "@kardinal/whiterabbit",
      link: "https://www.npmjs.com/package/@kardinal/whiterabbit",
      code: "https://github.com/Hakan-unal/white-rabbit",
   },
   {
      title: "@kardinal/test",
      link: "https://www.npmjs.com/package/@kardinal/test",
      code: "https://github.com/Hakan-unal/npm-test",
   }
]

export const statistic: Array<StatisticObjType> = [
   {
      name: "Demo",
      length: demos.length,
   },
   {
      name: "Skill",
      length: skills.length,
   },
   {
      name: "Project",
      length: projects.length,
   },
   {
      name: "Certificate",
      length: certificates.length,
   },
   {
      name: "Component",
      length: components.length,
   },
   {
      name: "Article",
      length: articles.length,
   },
   {
      name: "Npm Packages",
      length: npmPackages.length,
   },
];


