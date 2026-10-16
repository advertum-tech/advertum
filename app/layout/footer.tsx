"use client";

import cn from "classnames";
import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

export default function Footer() {
  const lang = useLang();

  return (
    <footer className={cn('pt-8 pb-16 max-lg:pb-8 max-lg:text-center max-sm:pb-4', 'bg-accentBackground text-main')}>
      <div className={cn('mx-auto', 'w-[90%] max-w-[1600px] sm:w-4/5')}>
        <div className="flex flex-col lg:flex-row gap-x-6">
          <div className="w-full lg:w-1/4 max-lg:mb-8">
            Advertum Agency
            <div className="italic">since 2021</div>
            <a href="mailto:hello@advertum.com">hello@advertum.com</a>
            <br/>+372 5551-1283
          </div>
          <div className="w-full lg:w-1/4 max-lg:mb-8">
            <address className="not-italic">Narva mnt 5, 10117 Tallinn<br/>Harjumaa, Estonia</address>
            <a href="https://www.google.com/maps?daddr=Narva+mnt+5,+10117+Tallinn" target="_blank">
              {lang === 'et' ? 'Teejuhised' : lang === 'ru' ? 'Построить маршрут' : 'Get directions'}
              <i className="icon-arrows-slim-right inline-block -rotate-45"></i>
            </a>
          </div>
          <div className="w-full lg:w-1/4 max-lg:mb-8">
            <div className="flex items-center gap-3 mb-3 max-lg:justify-center">
              <span className="text-xs text-gray-400">Language</span>
              <LangToggle />
            </div>
            <div className="flex flex-col gap-1 max-lg:items-center">
              <a href="/terms">Terms of Service</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <a href="https://www.teatmik.ee/et/personlegal/16351919-Advertum-Tech-O%C3%9C" target="_blank">Advertum Tech OÜ</a>
            <div className="mt-4">&copy; 2021 - {new Date().getFullYear()} Advertum Tech OÜ. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
