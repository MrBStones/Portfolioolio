import "~/styles/globals.css";

import "jetbrains-mono";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Logo from "./_components/logo";
import Nav from "./_components/nav";
import BgLogo from "./_components/bglogo";
import FadeInPage from "./_components/utils/fadeInPage";
import ThemeInit from "./_components/utils/themeInit";
import ScrollSmootherWrapper from "./_components/utils/scrollSmootherWrapper";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Colon Three",
  icons: [{ rel: "icon", url: "/scrunchesvgwithbg.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-light-background font-jetbrains dark:bg-background`}
    >
      <body
        className={"overflow-x-hidden bg-light-background dark:bg-background"}
      >
        <ThemeInit />

        <FadeInPage />
        <div className="fixed left-10 top-9 z-20">
          <Logo />
        </div>
        <div className="fixed right-10 top-12 z-20">
          <Nav />
        </div>

        <ScrollSmootherWrapper>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ScrollSmootherWrapper>
      </body>
    </html>
  );
}
