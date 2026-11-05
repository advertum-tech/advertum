import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Vibe coding in Russian: no gap with English",
  description:
    "2026 benchmarks: a coding agent solves as many tasks from Russian instructions as from English ones.",
};

export default function VibeCodingInRussian() {
  return <ArticleContent />;
}
