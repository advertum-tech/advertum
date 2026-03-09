import type { Metadata } from "next";
import "./assets/styles/globals.css";
import "./assets/styles/linea.min.css";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import React from "react";
import Body from "@/app/layout/body";

export const metadata: Metadata = {
  title: "Advertum • development and automation",
  description:
    "Advertum is a development and automation studio. We deploy AI agents into business processes and build products that work.",
  openGraph: {
    title: "Advertum • development and automation",
    description:
      "Advertum is a development and automation studio. We deploy AI agents into business processes and build products that work.",
    url: "https://advertum.com",
    siteName: "Advertum",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Body>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </Body>
    </html>
  );
}
