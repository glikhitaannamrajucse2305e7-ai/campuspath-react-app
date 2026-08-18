import type { Metadata } from "next";
import PrepChecklist from "../components/PrepChecklist";

export const metadata: Metadata = { title: "Preparation" };

export default function PreparationPage() {
  return <main><section className="page-hero section-shell"><span className="eyebrow">Build job-ready skills</span><h1>A preparation plan you can actually follow</h1><p>Complete small, practical tasks across four important placement areas.</p></section><PrepChecklist /></main>;
}
