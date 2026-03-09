"use client";
import cn from "classnames";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const p = lang === "ru" ? "/ru" : "";

  return (
    <div className="relative h-14 sm:h-16 z-[998]">
      <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 bg-transparent shadow-none">
        <div className="relative h-full bg-accentBackground">
          <div className={cn("mx-auto h-full", "w-[90%] max-w-[1600px] sm:w-4/5")}>
            <div className="flex items-center h-full">
              <div className="flex items-center justify-between flex-1 min-[993px]:flex-none min-[993px]:w-1/2">
                <Link href={p || "/"} className="inline-flex items-center gap-[0.45rem] border-b-0 hover:border-b-0 text-main">
                  <Image
                    src="/images/advertum-mobile.webp"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: "contain", flexShrink: 0 }}
                  />
                  Advertum
                </Link>
                <span className="min-[993px]:hidden">
                  <a
                    href="#"
                    onClick={() => setOpen(!open)}
                    className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent"
                  >
                    Menu
                  </a>
                </span>
              </div>
              <div className="min-[993px]:w-1/2">
                <ul className="hidden min-[993px]:flex items-center">
                  <li><Link href={`${p}/ai`} className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === "ru" ? "Агенты" : "Agents"}</Link></li>
                  <li className="ml-8"><Link href={`${p}/journal`} className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === "ru" ? "Журнал" : "Journal"}</Link></li>
                  <li className="ml-8"><Link href={`${p}/about`} className="inline p-0 text-main border-b border-main/25 hover:border-main/50 hover:bg-transparent">{lang === "ru" ? "О нас" : "About"}</Link></li>
                </ul>
                {open && (
                  <div
                    onClick={() => setOpen(false)}
                    className="fixed top-0 left-0 right-0 h-[120vh] bg-black/50 z-[997] opacity-100 will-change-[opacity]"
                  />
                )}
                <ul
                  className={cn(
                    "fixed w-[300px] left-0 top-0 m-0 -translate-x-[105%] h-full pb-[60px] bg-white z-[999] overflow-y-auto will-change-transform flex flex-col",
                    "transition-all duration-300",
                    open && "translate-x-0"
                  )}
                >
                  <li>
                    <Link
                      href={p || "/"}
                      onClick={() => setOpen(false)}
                      className="flex items-center h-20 px-8 gap-[0.45rem] text-main border-b border-main/25 hover:bg-black/5"
                    >
                      <Image src="/images/advertum-mobile.webp" alt="" width={40} height={40} style={{ objectFit: "contain", flexShrink: 0 }} />
                      Advertum
                    </Link>
                  </li>
                  <li><Link href={`${p}/ai`} onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === "ru" ? "Агенты" : "Agents"}</Link></li>
                  <li><Link href={`${p}/journal`} onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === "ru" ? "Журнал" : "Journal"}</Link></li>
                  <li><Link href={`${p}/about`} onClick={() => setOpen(false)} className="font-normal flex items-center h-20 px-8 text-main border-b border-main/25 hover:bg-black/5">{lang === "ru" ? "О нас" : "About"}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
