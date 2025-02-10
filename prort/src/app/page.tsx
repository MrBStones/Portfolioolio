
import { LatestPost } from "~/app/_components/post";
import Nav from "~/app/_components/nav";
import Ratio from "~/app/_components/ratio";
import Logo from "~/app/_components/logo";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from 'next/image'
import BgLogo from "~/app/_components/bglogo";


export default async function Home() {
  const hello = await api.post.hello({ text: "is here! Scroll ⇓" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main
          className="flex min-h-screen select-none flex-col items-center justify-center bg-background text-white -z-20">
        <div className="fixed left-10 top-9 z-10">
          <Logo/>
        </div>
        <div className="fixed right-10 top-12 z-10">
          <Nav hasSession={session != null}/>
        </div>
        <div className="fixed right-0 bottom-0 z-0">
          <BgLogo/>
        </div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 z-0">
          <div className={"container flex flex-col h-screen"}>
            <div className={"container flex flex-col h-sc items-center justify-center h-3/4"}>
              <h1 className="text-7xl text-light">
                Hello (portfolio in progress)
              </h1>
            </div>
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <div className="container flex flex-row h-sc" style={{height:"50vh"}}>
            <Image src={"/hisketch.png"} width={694} height={841} alt={"Sketch of scrunches"} objectFit={'contain'}
                   style={{width: 'auto', height: '100%',}}/>
            <SpeechBubble text={"HI IM SCRUNCHES!"}/>
          </div>

          <div className={"container flex flex-row h-sc h-128 bg-dark rounded-xl shadow-inner shadow-black"}>
            <p className={"p-5 text-5xl"}>BOOKSHELF</p>
          </div>

          <Ratio
              leftText={"～(■_■)～♪"}
              rightText={"(づ ᴗ _ᴗ)づ♡"}
              odd={false}
          />
          <Ratio leftText={"♪((ヽ(ᐛ)ﾉ))♬"} rightText={"♪(๑ᴖ◡ᴖ๑)♪"} odd={true}/>
          <Ratio
              leftText={"( 〃● ₃● ) ~"}
              rightText={"ヾ(⌐■_■)ノ♪"}
              odd={false}
          />
          <Ratio
              leftText={"♪♪♪ ヽ( ᐖゞ)"}
              rightText={"☆ﾟ°˖* ᕕ( ᐛ )ᕗ"}
              odd={true}
          />
          <Ratio
              leftText={"O(∩_∩)O"}
              rightText={"ヽ( ▀̿ Ĺ̯ ▀̿)ノ♪♬"}
              odd={false}
          />

          {session?.user && <LatestPost/>}
        </div>
      </main>
    </HydrateClient>
  );
}
