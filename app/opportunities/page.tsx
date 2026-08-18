import type { Metadata } from "next";
import OpportunityExplorer from "../components/OpportunityExplorer";

export const metadata: Metadata = { title: "Opportunities" };

export default function OpportunitiesPage() {
  return <main><section className="page-hero section-shell"><span className="eyebrow">Find your fit</span><h1>Opportunities for your first career step</h1><p>Explore sample internships and entry-level roles across popular technology paths.</p></section><OpportunityExplorer /></main>;
}
