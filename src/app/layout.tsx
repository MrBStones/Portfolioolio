import "~/styles/globals.css";

import "jetbrains-mono";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Logo from "./_components/logo";
import Nav from "./_components/nav";
import BgLogo from "./_components/bglogo";
import FadeInPage from "./_components/utils/fadeInPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Colon Three",
  icons: [{ rel: "icon", url: "/scrunchesvgwithbg.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background font-jetbrains`}>
      <body className={"overflow-x-hidden bg-background"}>
        <FadeInPage />
        <div className="fixed left-10 top-9 z-20">
          <Logo />
        </div>
        <div className="fixed right-10 top-12 z-20">
          <Nav />
        </div>
        <div className="fixed bottom-0 right-0 -z-0">
          <BgLogo />
        </div>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
