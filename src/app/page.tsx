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

export default async function Home() {
  return (
    <HydrateClient>
      <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light">
        <div
          className="mainContainer container z-0 flex flex-col items-center justify-center gap-12 px-4 py-16"
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
              hoverText={"No like, using the scrool wheel..."}
            />
          </div>
          <div className="container flex w-full flex-col gap-12 lg:flex-row">
            <div className="container flex w-full basis-1/2 flex-col gap-3">
              <h1 className="text-3xl">
                Writing,
                <b className="text-hero"> one line of code at a time :)</b>
              </h1>
              <p className="text-right text-xl">
                Hi! I'm Bjørn, a friendly developer who loves to solve problems
                and build cool things with code. I enjoy learning new
                technologies, collaborating with others, and turning ideas into
                reality—one line at a time. Welcome to my portfolio!
              </p>
              <br />
              <h1 className="text-3xl">My projects:</h1>
              <p className="text-right text-xl">
                Here are some of the projects I have worked on. Click on the
                bookshelf to see them all in detail.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Bookshelf />
            </div>
          </div>

          <BsDetailView
            description={
              "This is a project was created during the third semester of university. The site is written in c# using asp.net and is hosted on azure. Bla "
            }
            linkOneText={"GitHub repo →"}
            linkOne={"https://github.com/ITU-BDSA2024-GROUP9/Chirp"}
            linkTwoText={"Go to site →"}
            linkTwo={"https://bdsagroup9chirprazor.azurewebsites.net/"}
            image={"chirpimage.png"}
            bsItem={{
              num: "04",
              title: "CHIRP",
              description: "twitter clone",
            }}
            technologies={["asp.net", "C#", "azure"]}
            icon={"language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"}
          />

          <h1 className="text-2xl">Current Colors:</h1>
          <div
            className={
              "container flex flex-row gap-3 rounded-xl p-3 outline-dashed -outline-offset-4 outline-light"
            }
          >
            <div className="h-28 w-full bg-background">background</div>
            <div className="h-28 w-full bg-dark">dark</div>
            <div className="h-28 w-full bg-light text-background">light</div>
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
