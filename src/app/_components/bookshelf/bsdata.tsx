export type bsItemProps = {
  num: string;
  title: string;
  description: string;
  className?: string;
};

export type bsDetailViewProps = {
  description: string;
  linkOne?: string;
  linkTwo?: string;
  linkOneText: string;
  linkTwoText: string;
  image: string;
  imageAlt?: string;
  bsItem: bsItemProps;
  icon: string;
  iconAlt?: string;
  technologies?: string[];
};

export const bsData: bsItemProps[] = [
  { num: "01", title: "CHIRP", description: "clone of twitter" },
  { num: "02", title: "MAP OF DK", description: "openstreetmap viewer" },
  { num: "03", title: "COPENHAGEN BUZZ", description: "event planner app" },
  { num: "04", title: "CMN EMAILS", description: "dynamic market reports" },
  { num: "05", title: "PORTFOLIO SITE", description: "this site ur on rn" },
  { num: "06", title: "SKETCHES", description: "art i made" },
  { num: "07", title: "OTHER PROJECT", description: "lorem" },
  { num: "08", title: "OTHER PROJECT", description: "ipsum" },
  { num: "09", title: "OTHER PROJECT", description: "dolor" },
  { num: "10", title: "OTHER PROJECT", description: "dolor" },
  { num: "11", title: "OTHER PROJECT", description: "dolor" },
  { num: "12", title: "OTHER PROJECT", description: "dolor" },
];

export const projectsData: bsDetailViewProps[] = [
  {
    description:
      "This project was created during the third semester of university. The site is written in C# using ASP.NET and is hosted on Azure.",

    linkOneText: "GitHub repo →",
    linkOne: "https://github.com/ITU-BDSA2024-GROUP9/Chirp",
    linkTwoText: "Go to site →",
    linkTwo: "https://bdsagroup9chirprazor.azurewebsites.net/",
    image: "chirpimage.png",
    bsItem: {
      num: "01",
      title: "CHIRP",
      description: "twitter clone",
    },
    technologies: ["asp.net", "C#", "azure"],
    icon: "language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description:
      "This project was created during the second semester of university. The program is created using Java and JavaFX. It uses OpenStreetMap to display a map of Denmark with markers for different locations and navigation.",
    linkOneText: "Project",
    linkTwoText: "Unavailable",
    image: "mapofdk.png",
    bsItem: {
      num: "02",
      title: "MAP OF DK",
      description: "openstreetmap viewer",
    },
    technologies: ["java", "javafx", "openstreetmap"],
    icon: "desktop_windows_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description:
      "This project was created during the fourth semester of university. The app is created using Kotlin and Android Studio. It uses Firebase to store and create events, and native Android components to create a slick UI.",
    linkOneText: "GitHub Repo →",
    linkOne: "https://github.com/MrBStones/CopenhagenBuzz",
    linkTwoText: "",
    image: "copenhagenbuzz.png",
    bsItem: {
      num: "03",
      title: "COPENHAGEN BUZZ",
      description: "event planner app",
    },
    technologies: ["android", "kotlin", "firebase", "google maps"],
    icon: "smartphone_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description:
      "This project was created during the fourth semester of university. Our group was tasked with creating a system that automatically generates market report emails and sends them to users. The project was created in collaboration with CM-Navigator. Project organization was handled using the Scrum framework.",
    linkOneText: "Project",
    linkTwoText: "Unavailable",
    image: "cmnav.png",
    bsItem: {
      num: "04",
      title: "MARKET REPORTS",
      description: "email generation system",
    },
    technologies: ["typescript", "react", "neondb", "prisma"],
    icon: "language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description:
      "I like messing about with this website from time to time. It has been a fun side project to work on when I have had some downtime. In the process, it taught me a lot of TypeScript and React. It feels a bit backwards to create the portfolio before I have anything to show, but I guess that's just how it is. :P",
    linkOneText: "GitHub repo →",
    linkOne: "https://github.com/MrBStones/Portfolioolio",
    linkTwoText: "Go to site →",
    linkTwo: "https://portfolioolio.vercel.app/",
    image: "scrunchesvgwithbg.svg",
    bsItem: {
      num: "05",
      title: "PORTFOLIO SITE",
      description: "this site ur on rn",
    },
    technologies: ["typescript", "react", "tailwind", "gsap"],
    icon: "language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description:
      "I don't have this set up yet, but I draw a little, and this is where they are going to go. (The little guy in the image is Scrunches. Look at him go!)",
    linkOneText: "Sketchbooks →",
    linkOne: "https://github.com/MrBStones/Portfolioolio",
    linkTwoText: "",
    image: "drawing.png",
    bsItem: { num: "06", title: "SKETCHES", description: "art i made" },
    technologies: ["pen", "paper", "samsung galaxy tab s8"],
    icon: "brush_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
  {
    description: "This game sucks. I made it in two days.",
    linkOneText: "Go to itch →",
    linkOne: "https://mrstones.itch.io/regurgitate",
    linkTwoText: "",
    image: "https://img.itch.zone/aW1nLzIyNTAyOTg4LnBuZw==/original/dTUi69.png",
    bsItem: {
      num: "07",
      title: "REGURGITATE",
      description: "gmtk game jam 2025",
    },
    technologies: ["c#", "godot"],
    icon: "desktop_windows_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
];
