"use client";

import cn from "classnames";
import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className={cn('pt-8 pb-16 max-lg:pb-8 max-lg:text-center max-sm:pb-4', 'bg-accentBackground text-main')}>
      <div className={cn('container', '!w-[90%] !max-w-[1600px] sm:!w-4/5')}>
        <div className="row">
          <div className="col s12 l3 margin-on-medium-and-down">
            Advertum Agency
            <div className="italic">since 2009</div>
            <a href="mailto:hello@advertum.com">hello@advertum.com</a>
            <br/>+372 5551-1283
          </div>
          <div className="col s12 l3 margin-on-medium-and-down">
            <address className="not-italic">Narva mnt 5, 10117 Tallinn<br/>Harjumaa, Estonia</address>
            <a href="https://www.google.com/maps?daddr=Narva+mnt+5,+10117+Tallinn" target="_blank">
              {lang === 'ru' ? 'Построить маршрут' : 'Get directions'}
              <i className="icon-arrows-slim-right inline-block -rotate-45"></i>
            </a>
          </div>
          <div className="col s12 l3 margin-on-medium-and-down">
            <a href="https://t.me/advertumofficial" target="_blank">Follow @advertumofficial</a>
          </div>
          <div className="col s12 l3">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-400">Language</span>
              <LangToggle />
            </div>
            &copy; 2009 - {new Date().getFullYear()} <a href="https://www.teatmik.ee/et/personlegal/16351919-Advertum-Tech-O%C3%9C" target="_blank">Advertum Tech OÜ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
