"use client";

import { Roboto_Mono } from "next/font/google";
import React from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${robotoMono.className} bg-accentBackground`}>
      {children}
    </body>
  );
}
