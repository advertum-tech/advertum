"use client";

import {Roboto_Mono} from 'next/font/google'
import cn from 'classnames';
import oona from '../assets/styles/oona/oona.module.scss'
import React from "react";
import {usePathname} from "next/navigation";
import {LanguageProvider} from "@/app/context/LanguageContext";

const robotoMono = Roboto_Mono({subsets: ['latin']})

export default function Body({ children, initialLang }: { children: React.ReactNode, initialLang: "en" | "ru" }) {
  const pathname = usePathname()
  const pageClass = 'page-home';

  return (
    <body className={cn(robotoMono.className, oona[pageClass], 'bg-accentBackground')}>
      <LanguageProvider initialLang={initialLang}>
        {children}
      </LanguageProvider>
    </body>
  )
}
