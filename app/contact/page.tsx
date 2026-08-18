import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main><section className="contact-layout section-shell">
      <div className="contact-copy"><span className="eyebrow">Contact us</span><h1>Have a question or suggestion?</h1><p>This demo form shows a complete contact experience without sending data to an external service.</p><div className="contact-points"><div><span>✉</span><div><strong>Email</strong><p>hello@campuspath.demo</p></div></div><div><span>⌖</span><div><strong>Location</strong><p>Hyderabad, India</p></div></div><div><span>◷</span><div><strong>Response time</strong><p>Usually within one working day</p></div></div></div></div>
      <ContactForm />
    </section></main>
  );
}
