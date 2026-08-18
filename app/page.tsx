import Link from "next/link";

const steps = [
  { number: "01", title: "Explore roles", text: "Browse beginner-friendly opportunities and understand what each role needs." },
  { number: "02", title: "Build your plan", text: "Use a simple preparation checklist for aptitude, coding, projects, and interviews." },
  { number: "03", title: "Apply confidently", text: "Track your next action and move from preparation to placement with clarity." },
];

const highlights = [
  { value: "12+", label: "Sample opportunities" },
  { value: "4", label: "Preparation tracks" },
  { value: "100%", label: "Beginner friendly" },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <span className="eyebrow">Your placement journey, simplified</span>
          <h1>Plan today.<span> Get hired tomorrow.</span></h1>
          <p>CampusPath brings opportunities, preparation resources, and a clear action plan into one calm, student-friendly space.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/opportunities">Explore opportunities <span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" href="/preparation">View preparation plan</Link>
          </div>
          <div className="hero-note">
            <span className="avatar-stack" aria-hidden="true"><i>LK</i><i>AR</i><i>SM</i></span>
            <span>Made for students starting their career journey</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Placement preparation overview">
          <div className="floating-card floating-card-top"><span className="mini-icon green">✓</span><div><strong>Resume ready</strong><small>Profile completed</small></div></div>
          <div className="dashboard-card">
            <div className="dashboard-topline"><span>Weekly progress</span><strong>68%</strong></div>
            <div className="progress-track"><span /></div>
            <div className="dashboard-focus"><small>FOCUS FOR TODAY</small><h3>Practice JavaScript basics</h3><p>3 of 5 tasks completed</p></div>
            <div className="task-row complete"><span>✓</span> Update resume summary</div>
            <div className="task-row complete"><span>✓</span> Solve 2 aptitude questions</div>
            <div className="task-row"><span /> Review React hooks</div>
          </div>
          <div className="floating-card floating-card-bottom"><span className="mini-icon violet">⌁</span><div><strong>New role matched</strong><small>Frontend Intern · Hyderabad</small></div></div>
          <div className="dot-pattern" aria-hidden="true" />
        </div>
      </section>

      <section className="stats-strip section-shell" aria-label="CampusPath highlights">
        {highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="how-section section-shell">
        <div className="section-heading centered"><span className="eyebrow">Simple by design</span><h2>Three steps to move forward</h2><p>No complicated dashboards. Just the right next step at the right time.</p></div>
        <div className="step-grid">
          {steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><span className="eyebrow light">Ready to begin?</span><h2>Your next opportunity could be one click away.</h2></div>
        <Link className="button button-white" href="/opportunities">Start exploring →</Link>
      </section>
    </main>
  );
}
