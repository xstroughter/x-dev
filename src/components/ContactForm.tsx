"use client";

import { useState, type FormEvent } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success" } | { kind: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: (data.get("name") ?? "").toString().trim(),
      phone: (data.get("phone") ?? "").toString().trim(),
      email: (data.get("email") ?? "").toString().trim(),
      type: (data.get("type") ?? "").toString().trim(),
      message: (data.get("message") ?? "").toString().trim(),
    };

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">Phone number</label>
        <input id="cf-phone" type="tel" name="phone" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" name="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-type">Type of website</label>
        <select id="cf-type" name="type" defaultValue="" required>
          <option value="" disabled>
            Select one…
          </option>
          <option>E-commerce store</option>
          <option>Portfolio / brand site</option>
          <option>Booking / services site</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, and what do you need help with?"
        />
      </div>
      <button type="submit" className="btn" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      {status.kind === "success" && (
        <p className="form-status success" role="status">
          Thanks — we&apos;ll be in touch soon.
        </p>
      )}
      {status.kind === "error" && (
        <p className="form-status error" role="status">
          {status.message}
        </p>
      )}
      <p className="form-note">
        Prefer to write directly?{" "}
        <a href="mailto:xstroughter@gmail.com">xstroughter@gmail.com</a>
      </p>
    </form>
  );
}
