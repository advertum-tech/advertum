import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "The Great Displacement — AI and the Next Fifty Years",
  description:
    "By 2035 the highest-paid worker in your city won't be a programmer. It will be an electrician. An essay on the future of work, money, and humanity.",
};

export default function GreatDisplacement() {
  return <ArticleContent />;
}
