
import { LatestPost } from "~/app/_components/post";
import Nav from "~/app/_components/nav";
import Ratio from "~/app/_components/ratio";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";


export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#454545] to-[#000000] text-white">
        <div className="fixed top-5 right-5 "><Nav /></div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <br/>
          <h1 className="text-2xl text-white ">
            Hello (portfolio in progress)
          </h1>
          <Ratio leftText={"～(■_■)～♪"} rightText={"(づ ᴗ _ᴗ)づ♡"} odd={false} />
          <Ratio leftText={"♪((ヽ(ᐛ)ﾉ))♬"} rightText={"♪(๑ᴖ◡ᴖ๑)♪"} odd={true} />
          <Ratio leftText={"( 〃● ₃● ) ~"} rightText={"ヾ(⌐■_■)ノ♪"} odd={false} />
          <Ratio leftText={"♪♪♪ ヽ( ᐖゞ)"} rightText={"☆ﾟ°˖* ᕕ( ᐛ )ᕗ"} odd={true} />
          <Ratio leftText={"O(∩_∩)O"} rightText={"ヽ( ▀̿ Ĺ̯ ▀̿)ノ♪♬"} odd={false} />




          {session?.user && <LatestPost/>}
        </div>
      </main>
    </HydrateClient>
  );
}
