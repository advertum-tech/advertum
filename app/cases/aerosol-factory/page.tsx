import type { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
  title: "Агент планирования производства — Фабрика Аэрозолей · Advertum",
  description:
    "Как AI-агент в Telegram помог заводу аэрозольной упаковки автоматизировать планирование производства — склад, заказы, рекомендации в секунды.",
};

export default function AerosolFactoryCase() {
  return <CaseContent />;
}
