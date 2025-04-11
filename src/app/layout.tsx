import "~/styles/globals.css";

import "jetbrains-mono";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

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
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
