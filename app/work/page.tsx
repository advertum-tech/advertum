"use client";
import cn from "classnames";
import oona from "@/app/assets/styles/oona/oona.module.scss";
import { useLang } from "@/app/context/LanguageContext";

export default function Work() {
  const { lang } = useLang();

  return (
    <div className={cn('container', oona['container'])}>
      <div className="row">
        <div className="col s12 l6 offset-l6">
          <p className={cn('flow-text intro-text', oona['intro-text'])}>
            {lang === 'ru'
              ? 'Лучшие проекты из нашего портфолио. За годы работы Advertum сотрудничал с Martini, Neste, Coca-Cola, Paxful и многими другими.'
              : 'The finest selection of our projects. Over the years, Advertum has collaborated with clients like Martini, Neste, Coca-Cola, Paxful and many others.'}
          </p>
        </div>
      </div>

      <section className={cn('projects', oona['section'], oona['projects'])}>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/clip-finance" className={cn(oona['no-underline'])}>
              <img src="/images/work/clip/clip.webp" alt="Clip Finance" className="responsive-img"/>
            </a>
            <a href="#/work/clip-finance" className={cn('flow-text', oona['item-title'])}>Clip Finance</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/advertum-cashback" className={cn(oona['no-underline'])}>
              <img src="/images/work/advertum/advertum.webp" alt="Advertum Cashback" className="responsive-img"/>
            </a>
            <a href="#/work/advertum-cashback" className={cn('flow-text', oona['item-title'])}>Advertum Cashback</a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/paxful-wallet" className={cn(oona['no-underline'])}>
              <img src="/images/work/paxful-wallet.webp" alt="Paxful Bitcoin Wallet" className="responsive-img"/>
            </a>
            <a href="#/work/paxful-wallet" className={cn('flow-text', oona['item-title'])}>Paxful Bitcoin Wallet</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/clip-yield-wars" className={cn(oona['no-underline'])}>
              <img src="/images/work/clip-yield-wars.webp" alt="Clip Yield Wars" className="responsive-img"/>
            </a>
            <a href="#/work/clip-yield-wars" className={cn('flow-text', oona['item-title'])}>Clip Yield Wars</a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/advertum-cashback-for-gamers" className={cn(oona['no-underline'])}>
              <img src="/images/work/advertum-cashback-for-gamers.webp" alt="Advertum Cashback for Gamers" className="responsive-img"/>
            </a>
            <a href="#/work/advertum-cashback-for-gamers" className={cn('flow-text', oona['item-title'])}>Advertum Cashback for Gamers</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/paxful-affiliate-program" className={cn(oona['no-underline'])}>
              <img src="/images/work/paxful-affiliate-program.webp" alt="Paxful Affiliate Program" className="responsive-img"/>
            </a>
            <a href="#/work/paxful-affiliate-program" className={cn('flow-text', oona['item-title'])}>Paxful Affiliate Program</a>
          </div>
        </div>
      </section>
    </div>
  )
}
