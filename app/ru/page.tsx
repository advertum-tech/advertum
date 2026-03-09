import type { Metadata } from "next";

export { default } from "@/app/page";

export const metadata: Metadata = {
  title: "Advertum • разработка и автоматизация",
  description:
    "Advertum — студия автоматизации и разработки. Мы внедряем AI-агентов в бизнес-процессы и создаём продукты, которые работают.",
  openGraph: {
    title: "Advertum • разработка и автоматизация",
    description:
      "Advertum — студия автоматизации и разработки. Мы внедряем AI-агентов в бизнес-процессы и создаём продукты, которые работают.",
    url: "https://advertum.com/ru",
    siteName: "Advertum",
    locale: "ru_RU",
    type: "website",
  },
};
