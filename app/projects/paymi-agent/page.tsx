import type { Metadata } from "next";
import PaymiPage from "./PaymiPage";

export const metadata: Metadata = {
  title: "Paymi Agent — Femi Jimoh",
  description:
    "Case study: Redesigning Nigeria's last-mile payment experience. Over a year, multiple redesign cycles, one live product.",
};

export default function Page() {
  return <PaymiPage />;
}
