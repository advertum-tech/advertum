"use client";
import cn from "classnames";
import {useState} from "react";
import Link from "next/link";
import ResponsiveUtility from "@/app/layout/ResponsiveUtility";
import { useLang } from "@/app/context/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  return (
    <div className="relative h-14 sm:h-16 z-[998]">
      <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 bg-transparent shadow-none">
        <div className="relative h-full bg-accentBackground">
          <div className={cn('mx-auto h-full', 'w-[90%] max-w-[1600px] sm:w-4/5')}>
            <div className="flex items-center h-full">
              <div className="flex items-center justify-between flex-1 min-[993px]:flex-none min-[993px]:w-1/2">
                <Link href="/" className="inline-flex items-center gap-[0.45rem] border-b-0 hover:border-b-0 text-main">
                  <img
                    src="/images/advertum-mobile.webp"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />
                  Advertum
                </Link>
                {/*<ResponsiveUtility />*/}
                <span className="min-[993px]:hidden">
                    <a href="#"
                       onClick={() => setOpen(!open)}
                       className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">Menu</a>
                  </span>
              </div>
              <div className="min-[993px]:w-1/2">
                <ul className="hidden min-[993px]:flex items-center">
                  <li><Link href="/ai" className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'Агенты' : 'Agents'}</Link></li>
                  <li className="ml-8"><Link href="/journal" className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'Журнал' : 'Journal'}</Link></li>
                  <li className="ml-8"><Link href="/about" className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'О нас' : 'About'}</Link></li>
                </ul>
                {open && <div onClick={() => setOpen(false)} className="fixed top-0 left-0 right-0 h-[120vh] bg-black/50 z-[997] opacity-100 will-change-[opacity]"></div>}
                <ul className={cn(
                  'fixed w-[300px] left-0 top-0 m-0 -translate-x-[105%] h-full pb-[60px] bg-white z-[999] overflow-y-auto will-change-transform flex flex-col',
                  'transition-all duration-300',
                  open && 'translate-x-0'
                )}>
                  <li>
                    <Link href="/" onClick={() => setOpen(false)} className="flex items-center h-20 px-8 gap-[0.45rem] text-main border-b border-main/25 hover:bg-black/5">
                      <img src="/images/advertum-mobile.webp" alt="" width={40} height={40} style={{ objectFit: 'contain', flexShrink: 0 }} />
                      Advertum
                    </Link>
                  </li>
                  <li><Link href="/ai" onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === 'ru' ? 'Агенты' : 'Agents'}</Link></li>
                  <li><Link href="/journal" onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === 'ru' ? 'Журнал' : 'Journal'}</Link></li>
                  <li><Link href="/about" onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === 'ru' ? 'О нас' : 'About'}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
