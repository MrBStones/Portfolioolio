
import { LatestPost } from "~/app/_components/post";
import Nav from "~/app/_components/nav";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";


export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6D5959] to-[#454545] text-white">
        <div className="fixed top-5 right-5 "><Nav /></div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-2xl text-white ">
            Hello (portfolio in progress)
          </h1>
          <div className="container flex flex-row items-center justify-center gap-12 px4 py-16">

            <div
                className="container flex flex-col items-center justify-center bg-celadon shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-3/5 h-48">
              <p className="text-center text-2xl text-black">
                3/5
              </p>
            </div>
            <div
                className="container flex flex-col items-center justify-center bg-spring-green shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-2/5 h-48">
              <p className="text-center text-2xl text-black">
                2/5
              </p>
            </div>
          </div>
          <div className="container flex flex-row items-center justify-center gap-12 px4 py-16">
            <div
                className="container flex flex-col items-center justify-center bg-spring-green shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-2/5 h-48">
            <p className="text-center text-2xl text-black">
                2/5
              </p>
            </div>
            <div
                className="container flex flex-col items-center justify-center bg-celadon shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-3/5 h-48">
              <p className="text-center text-2xl text-black">
                3/5
              </p>
            </div>

          </div>
          <div className="container flex flex-row items-center justify-center gap-12 px4 py-16">
            <div
                className="container flex flex-col items-center justify-center bg-celadon shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-3/5 h-48">
              <p className="text-center text-2xl text-black">
                3/5
              </p>
            </div>
            <div
                className="container flex flex-col items-center justify-center bg-spring-green shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-2/5 h-48">
              <p className="text-center text-2xl text-black">
                2/5
              </p>
            </div>


          </div>
          <div className="container flex flex-row items-center justify-center gap-12 px4 py-16">
            <div
                className="container flex flex-col items-center justify-center bg-spring-green shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-2/5 h-48">
            <p className="text-center text-2xl text-black">
                2/5
              </p>
            </div>
            <div
                className="container flex flex-col items-center justify-center bg-celadon shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-3/5 h-48">
              <p className="text-center text-2xl text-black">
                3/5
              </p>
            </div>

          </div>
          <div className="container flex flex-row items-center justify-center gap-12 px4 py-16">
            <div
                className="container flex flex-col items-center justify-center bg-celadon shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-3/5 h-48">
              <p className="text-center text-2xl text-black">
                3/5
              </p>
            </div>

            <div
                className="container flex flex-col items-center justify-center bg-spring-green shadow-inner shadow-cambridge-blue rounded-xl md:p-0 w-2/5 h-48">
              <p className="text-center text-2xl text-black">
                2/5
              </p>
            </div>

          </div>



          {session?.user && <LatestPost/>}
        </div>
      </main>
    </HydrateClient>
  );
}
