import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import 'jetbrains-mono'
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
    <html lang="en" className={`font-jetbrains bg-background `}>
      <body className={"bg-background overflow-x-hidden"}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
