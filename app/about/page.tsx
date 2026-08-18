import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: "◇", title: "Clarity first", text: "We reduce career preparation into simple actions that feel achievable." },
  { icon: "♧", title: "Student friendly", text: "Every screen uses clear language, clean design, and beginner-friendly content." },
  { icon: "↗", title: "Progress matters", text: "Small completed tasks build the confidence needed for bigger opportunities." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero section-shell">
        <div><span className="eyebrow">About CampusPath</span><h1>Helping students turn preparation into progress.</h1><p>CampusPath is a simple demonstration application designed to make the first placement journey feel less confusing and more actionable.</p><Link className="button button-primary" href="/preparation">See the preparation plan →</Link></div>
        <div className="about-art" aria-label="A path connecting learning to career"><span className="art-node node-one">Learn</span><span className="art-line" /><span className="art-node node-two">Build</span><span className="art-line second" /><span className="art-node node-three">Grow</span></div>
      </section>
      <section className="values-section section-shell"><div className="section-heading"><span className="eyebrow">What guides us</span><h2>Simple values, useful experience</h2></div><div className="values-grid">{values.map((value) => <article key={value.title}><span>{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></section>
    </main>
  );
}
