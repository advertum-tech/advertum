"use client";
import oona from '../assets/styles/oona/oona.module.scss'
import cn from "classnames";
import {useState} from "react";
import ResponsiveUtility from "@/app/layout/ResponsiveUtility";
import { useLang } from "@/app/context/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  return (
    <div className={cn('navbar-fixed', oona['navbar-fixed'])}>
      <nav>
        <div className="nav-wrapper bg-accentBackground">
          <div className={cn(oona['container'], 'container')}>
            <div className="row">
              <div className="col s12 l6">
                <a href="/" className={oona['current-page']}>
                  <img
                    src="/images/advertum-mobile.webp"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />
                  Advertum
                </a>
                {/*<ResponsiveUtility />*/}
                <span className="right show-on-medium-and-down hide-on-large-only">
                    <a href="#"
                       onClick={() => setOpen(!open)}
                       className={cn('sidenav-toggle')}>Menu</a>
                  </span>
              </div>
              <div className="col s12 l6">
                <ul className=" hide-on-med-and-down">
                  <li><a href="/ai">{lang === 'ru' ? 'Агенты' : 'Agents'}</a></li>
                  <li><a href="/journal">{lang === 'ru' ? 'Журнал' : 'Journal'}</a></li>
                  <li><a href="/about">{lang === 'ru' ? 'О нас' : 'About'}</a></li>
                </ul>
                {open && <div onClick={() => setOpen(false)} className={oona['side-nav-overlay']}></div>}
                <ul className={cn('side-nav', oona['side-nav'], open && oona['side-nav-open'])}>
                  <li><a href="/ai">{lang === 'ru' ? 'Агенты' : 'Agents'}</a></li>
                  <li><a href="/journal">{lang === 'ru' ? 'Журнал' : 'Journal'}</a></li>
                  <li><a href="/about">{lang === 'ru' ? 'О нас' : 'About'}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
