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
    <div className="navbar-fixed">
      <nav className="bg-transparent shadow-none">
        <div className="nav-wrapper bg-accentBackground">
          <div className={cn('container', '!w-[90%] !max-w-[1600px] sm:!w-4/5')}>
            <div className="row">
              <div className="col s12 l6">
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
                <span className="right show-on-medium-and-down hide-on-large-only">
                    <a href="#"
                       onClick={() => setOpen(!open)}
                       className="!inline !p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">Menu</a>
                  </span>
              </div>
              <div className="col s12 l6">
                <ul className=" hide-on-med-and-down">
                  <li><Link href="/ai" className="!inline !p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'Агенты' : 'Agents'}</Link></li>
                  <li className="ml-8"><Link href="/journal" className="!inline !p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'Журнал' : 'Journal'}</Link></li>
                  <li className="ml-8"><Link href="/about" className="!inline !p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === 'ru' ? 'О нас' : 'About'}</Link></li>
                </ul>
                {open && <div onClick={() => setOpen(false)} className="fixed top-0 left-0 right-0 h-[120vh] bg-black/50 z-[997] opacity-100 will-change-[opacity]"></div>}
                <ul className={cn('side-nav', 'transition-all duration-300', open && '!translate-x-0')}>
                  <li>
                    <Link href="/" onClick={() => setOpen(false)} className="!flex !items-center !h-20 gap-[0.45rem] text-main border-b border-main/25 !border-main/25">
                      <img src="/images/advertum-mobile.webp" alt="" width={40} height={40} style={{ objectFit: 'contain', flexShrink: 0 }} />
                      Advertum
                    </Link>
                  </li>
                  <li><Link href="/ai" className="!font-normal !flex !items-center !h-20 text-main border-b border-main/25">{lang === 'ru' ? 'Агенты' : 'Agents'}</Link></li>
                  <li><Link href="/journal" className="!font-normal !flex !items-center !h-20 text-main border-b border-main/25">{lang === 'ru' ? 'Журнал' : 'Journal'}</Link></li>
                  <li><Link href="/about" className="!font-normal !flex !items-center !h-20 text-main border-b border-main/25">{lang === 'ru' ? 'О нас' : 'About'}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
