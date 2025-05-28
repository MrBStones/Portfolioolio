export type bsItemProps = {
  num: string;
  title: string;
  description: string;
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
      "This is a project was created during the third semester of university. The site is written in c# using asp.net and is hosted on azure. Bla ",

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
      "This is a project was created during the second semester of university. The program is created using java and javafx. It uses openstreetmap to display a map of Denmark with markers for different locations, and navigigation.",
    linkOneText: "Source →",
    linkOne: "https://chatgpt.com/",
    linkTwoText: "Open Street Map →",
    linkTwo: "https://www.openstreetmap.org/",
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
      "This is a project was created during the fourth semester of university. The app is created using kotlin and android studio. It uses firebase to store and create events, adn native android components to create a slick UI.",
    linkOneText: "GitHub Repo →",
    linkOne: "https://github.com/MrBStones/CopenhagenBuzz",
    linkTwoText: "Firebase →",
    linkTwo: "https://firebase.google.com/",
    image: "copenhagenbuzz.png",
    bsItem: {
      num: "03",
      title: "COPENHAGEN BUZZ",
      description: "event planner app",
    },
    technologies: ["Android", "Kotlin", "Firebase", "Google Maps"],
    icon: "smartphone_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
  },
];
