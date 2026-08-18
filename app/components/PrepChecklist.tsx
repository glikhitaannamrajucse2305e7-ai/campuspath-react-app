"use client";

import { useState } from "react";

const tracks = [
  { icon: "∑", title: "Aptitude", color: "blue", tasks: ["Practice percentages and ratios", "Solve 10 reasoning questions", "Take one timed mock test"] },
  { icon: "</>", title: "Technical", color: "violet", tasks: ["Revise programming fundamentals", "Practice arrays and strings", "Review DBMS and SQL basics"] },
  { icon: "▤", title: "Resume", color: "green", tasks: ["Write a clear profile summary", "Add two strong projects", "Check formatting and spelling"] },
  { icon: "◎", title: "Interview", color: "coral", tasks: ["Prepare your self-introduction", "Practice two HR questions", "Record a mock interview"] },
];

export default function PrepChecklist() {
  const [done, setDone] = useState<string[]>([]);
  const total = tracks.reduce((count, track) => count + track.tasks.length, 0);
  const percent = Math.round((done.length / total) * 100);
  function toggle(task: string) { setDone((current) => current.includes(task) ? current.filter((item) => item !== task) : [...current, task]); }

  return (
    <section className="prep-section section-shell">
      <div className="progress-panel"><div><span>Overall progress</span><strong>{done.length} of {total} tasks completed</strong></div><div className="progress-value">{percent}%</div><div className="progress-track wide"><span style={{ width: `${percent}%` }} /></div></div>
      <div className="track-grid">
        {tracks.map((track) => (
          <article className="track-card" key={track.title}>
            <div className="track-heading"><span className={`track-icon ${track.color}`}>{track.icon}</span><div><h2>{track.title}</h2><p>{track.tasks.filter((task) => done.includes(task)).length}/{track.tasks.length} complete</p></div></div>
            <div className="checklist">{track.tasks.map((task) => <button type="button" aria-pressed={done.includes(task)} className={done.includes(task) ? "checked" : ""} key={task} onClick={() => toggle(task)}><span className="custom-check">✓</span><span>{task}</span></button>)}</div>
          </article>
        ))}
      </div>
      <aside className="tip-banner"><span aria-hidden="true">✦</span><div><strong>CampusPath tip</strong><p>Consistency beats long study sessions. Try completing one small task every day.</p></div></aside>
    </section>
  );
}
