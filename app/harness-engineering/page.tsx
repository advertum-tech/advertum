import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Harness Engineering: Using Codex in an Agent-First World",
  description:
    "How the OpenAI team built a product from scratch in five months — a million lines of code without a single line written by hand. Translated by Advertum.",
};

export default function HarnessEngineering() {
  return <ArticleContent />;
}
