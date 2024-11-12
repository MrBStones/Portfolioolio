
import { auth } from "~/server/auth";
import Link from "next/link";
import {api} from "~/trpc/server";

export default async function Nav() {
    const hello = await api.post.hello({ text: "is here!" });
    const session = await auth();

    return (

        <div className="container backdrop-filter flex flex-row items-center justify-center gap-2 bg-black/30 backdrop-blur-xl rounded-xl">

            <p className="text-2xl text-white">
                {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
            <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
                {session ? "Sign out" : "Sign in"}
            </Link>
        </div>



    )
}