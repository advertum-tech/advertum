import type {Metadata} from 'next'
import './assets/styles/globals.css'
import './assets/styles/linea.min.css'
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import React from "react";
import Body from "@/app/layout/body";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'Advertum • design and development',
  description: 'Advertum is a cutting edge design and development studio that exists to create challenging and engaging visual concepts.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  const lang = (headers().get("x-lang") ?? "en") as "en" | "ru";

  return (
    <html lang={lang}>
    <Body initialLang={lang}>
      <div className="flex min-h-screen flex-col">
        <Nav/>
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    </Body>
    </html>
  )
}
