"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }

  if (submitted) return <div className="success-card"><span>✓</span><h2>Message received!</h2><p>Thank you for contacting CampusPath. This is a demonstration confirmation.</p><button className="button button-secondary" onClick={() => setSubmitted(false)}>Send another message</button></div>;

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label><span>First name</span><input name="firstName" placeholder="Likhita" required /></label><label><span>Last name</span><input name="lastName" placeholder="A" required /></label></div>
      <label><span>Email address</span><input name="email" type="email" placeholder="you@example.com" required /></label>
      <label><span>Subject</span><select name="subject" defaultValue=""><option value="" disabled>Select a topic</option><option>General question</option><option>Opportunity suggestion</option><option>Feedback</option></select></label>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Write your message here..." required /></label>
      <button className="button button-primary full-button" type="submit">Send message →</button>
    </form>
  );
}
