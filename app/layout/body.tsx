"use client";

import {Roboto_Mono} from 'next/font/google'
import React from "react";
import {LanguageProvider} from "@/app/context/LanguageContext";

const robotoMono = Roboto_Mono({subsets: ['latin']})

export default function Body({ children, initialLang }: { children: React.ReactNode, initialLang: "en" | "ru" }) {
  return (
    <body className={`${robotoMono.className} bg-accentBackground`}>
      <LanguageProvider initialLang={initialLang}>
        {children}
      </LanguageProvider>
    </body>
  )
}
