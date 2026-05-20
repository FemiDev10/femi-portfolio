import type { Metadata } from "next";
import PaymiPage from "./PaymiPage";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Paymi Agent — Femi Jimoh",
  description:
    "Case study: Redesigning Nigeria's last-mile payment experience. Over a year, multiple redesign cycles, one live product.",
};

export default function Page() {
  return (
    <PasswordGate id="paymi-agent">
      <PaymiPage />
    </PasswordGate>
  );
}
