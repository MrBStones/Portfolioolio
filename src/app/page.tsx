import Nav from "~/app/_components/nav";
import Ratio from "~/app/_components/ratio";
import Logo from "~/app/_components/logo";
import { HydrateClient } from "~/trpc/server";
import BgLogo from "~/app/_components/bglogo";
import SpeechWithImg from "./_components/speechwimg";
import TitleText from "./_components/name/titletext";
import ScrollIndicator from "./_components/scrollindicator";
import Bookshelf from "./_components/bookshelf/bookshelf";
import NameLogo from "./_components/name/name";
import BsDetailView from "./_components/bookshelf/bsdetailview";
import AnimateIdOnOpen from "./_components/utils/animateIdOnOpen";
import TransitionLink from "./_components/utils/transitionLink";
import ContactButton from "./_components/contactButton";
import tailwindConfig from "tailwind.config";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light-light dark:text-light">
        <div
          className="mainContainer container z-0 flex flex-col items-center justify-center gap-16 px-4 pb-64 pt-16"
          id="home"
        >
          <div className={"container flex h-screen flex-col"}>
            <div
              className={
                "h-sc container flex h-3/4 flex-col items-center justify-center"
              }
            >
              <NameLogo />
            </div>
            <ScrollIndicator
              text={"Try scrolling why dontcha?"}
              hoverText={"You know, using the scrool wheel..."}
            />
          </div>
          <div className="container flex w-full flex-col gap-12 lg:flex-row">
            <div className="container flex w-full basis-1/2 flex-col gap-3">
              <h1 className="text-3xl">
                Hard working
                <b className="text-light-dark-hero dark:text-hero">
                  {" "}
                  student of IT :)
                </b>
              </h1>
              <p className="text-justify text-xl">
                Hi! Im Bjørn, a friendly student from the IT University of
                Copenhagen who loves to solve problems and build cool things
                with code. From my studies at ITU i have become well versed in
                IT.
              </p>
              <br />
              <p className="text-justify text-xl">
                I enjoy learning new technologies, collaborating with my peers,
                and turning ideas into reality, one line of code at a time.
                <b className="text-light-dark-hero dark:text-hero">
                  {" "}
                  Welcome to my portfolio!
                </b>
              </p>
              <br />
              <h1 className="text-3xl">My projects:</h1>
              <p className="text-justify text-xl">
                Here are some of the projects I have worked on. Click on the
                bookshelf to see them all in detail.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Bookshelf />
            </div>
          </div>
          <ContactButton />
        </div>

        <div className="mainContainer w-full" id="home">
          <div
            className="flex h-fit w-full items-center justify-center"
            style={{
              background:
                "repeating-linear-gradient( -45deg, rgba(0,0,0,0),rgba(0,0,0,0) 20px, " +
                tailwindConfig.theme.extend.colors["dark-hero"] +
                " 20px, " +
                tailwindConfig.theme.extend.colors["dark-hero"] +
                " 100px )",
            }}
          >
            <h1 className="my-3 w-fit bg-hero px-4 py-2 text-center text-4xl text-background">
              FUN ZONE:
            </h1>
          </div>
        </div>
        <div
          className="mainContainer container z-0 flex flex-col items-center justify-center gap-12 px-4 py-16"
          id="home"
        >
          <h1 className="text-2xl">Current Colors:</h1>
          <div
            className={
              "container flex flex-row gap-3 rounded-xl p-3 outline-dashed -outline-offset-4 outline-light-light dark:outline-light"
            }
          >
            <div className="h-28 w-full bg-light-background text-light-light dark:bg-background dark:text-light">
              background
            </div>
            <div className="h-28 w-full bg-light-dark text-light-light dark:bg-dark dark:text-light">
              dark
            </div>
            <div className="h-28 w-full bg-light-light text-light-background dark:bg-light dark:text-background">
              light
            </div>
            <div className="h-28 w-full bg-hero text-background">hero</div>
            <div className="h-28 w-full bg-dark-hero text-background">
              dark-hero
            </div>
          </div>
          <Ratio
            leftText={"～(■_■)～♪"}
            rightText={"(づ ᴗ _ᴗ)づ♡"}
            odd={false}
          />
          <TitleText
            text={"Bjørn Møgelhøj"}
            subText="(Still a work in progress... "
          />
        </div>
      </main>
    </HydrateClient>
  );
}
