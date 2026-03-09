import type { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
  title: "Production Planning Agent — Aerosol Factory · Advertum",
  description:
    "How an AI agent helped an aerosol packaging factory make production decisions in seconds — directly from Telegram.",
};

export default function AerosolFactoryCase() {
  return <CaseContent />;
}
