"use client";

import { useMemo, useState } from "react";

const opportunities = [
  { company: "NovaWorks", role: "Frontend Intern", type: "Internship", location: "Hyderabad", mode: "Hybrid", skill: "React", color: "indigo" },
  { company: "PixelGrid", role: "UI Developer Trainee", type: "Full-time", location: "Bengaluru", mode: "Office", skill: "HTML & CSS", color: "coral" },
  { company: "DataNest", role: "Data Analyst Intern", type: "Internship", location: "Remote", mode: "Remote", skill: "Python", color: "green" },
  { company: "CloudLoop", role: "Junior Cloud Associate", type: "Full-time", location: "Pune", mode: "Hybrid", skill: "Cloud", color: "blue" },
  { company: "CodeCraft", role: "Java Developer Trainee", type: "Full-time", location: "Chennai", mode: "Office", skill: "Java", color: "amber" },
  { company: "BrightByte", role: "QA Intern", type: "Internship", location: "Remote", mode: "Remote", skill: "Testing", color: "violet" },
];
const filters = ["All", "Internship", "Full-time", "Remote"];

export default function OpportunityExplorer() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const results = useMemo(() => opportunities.filter((item) => {
    const matchesFilter = filter === "All" || (filter === "Remote" ? item.mode === "Remote" : item.type === filter);
    const text = `${item.company} ${item.role} ${item.location} ${item.skill}`.toLowerCase();
    return matchesFilter && text.includes(search.toLowerCase());
  }), [filter, search]);
  function toggleSaved(role: string) { setSaved((current) => current.includes(role) ? current.filter((item) => item !== role) : [...current, role]); }

  return (
    <section className="opportunity-section section-shell">
      <div className="filter-bar">
        <label className="search-box"><span aria-hidden="true">⌕</span><span className="sr-only">Search opportunities</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search role, skill, or city" /></label>
        <div className="filter-pills" aria-label="Opportunity type filters">{filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      </div>
      <div className="results-line"><strong>{results.length} opportunities</strong><span>{saved.length} saved</span></div>
      <div className="opportunity-grid">
        {results.map((item) => (
          <article className="opportunity-card" key={item.role}>
            <div className="opportunity-card-top"><span className={`company-logo ${item.color}`}>{item.company.slice(0, 2).toUpperCase()}</span><button className={saved.includes(item.role) ? "save-button saved" : "save-button"} onClick={() => toggleSaved(item.role)} aria-label={`${saved.includes(item.role) ? "Remove" : "Save"} ${item.role}`}>{saved.includes(item.role) ? "♥" : "♡"}</button></div>
            <span className="company-name">{item.company}</span><h2>{item.role}</h2>
            <div className="job-meta"><span>⌖ {item.location}</span><span>◷ {item.mode}</span></div>
            <div className="tag-row"><span>{item.type}</span><span>{item.skill}</span></div>
            <button className="text-button" type="button">View details →</button>
          </article>
        ))}
      </div>
      {results.length === 0 && <div className="empty-state"><strong>No matching opportunities</strong><p>Try a different keyword or filter.</p></div>}
    </section>
  );
}
