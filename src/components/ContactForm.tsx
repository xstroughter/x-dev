"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success" } | { kind: "error" };

export default function ContactForm({ dict }: { dict: Dictionary["contact"]["form"] }) {
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
      if (!res.ok) throw new Error();
      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({ kind: "error" });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="cf-name">{dict.name}</label>
        <input id="cf-name" type="text" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">{dict.phone}</label>
        <input id="cf-phone" type="tel" name="phone" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{dict.email}</label>
        <input id="cf-email" type="email" name="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-type">{dict.type}</label>
        <select id="cf-type" name="type" defaultValue="" required>
          <option value="" disabled>
            {dict.selectPlaceholder}
          </option>
          {dict.typeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-message">{dict.message}</label>
        <textarea id="cf-message" name="message" rows={5} required placeholder={dict.messagePlaceholder} />
      </div>
      <button type="submit" className="btn" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? dict.sending : dict.send}
      </button>
      {status.kind === "success" && (
        <p className="form-status success" role="status">
          {dict.success}
        </p>
      )}
      {status.kind === "error" && (
        <p className="form-status error" role="status">
          {dict.errorGeneric}
        </p>
      )}
      <p className="form-note">
        {dict.preferDirect} <a href="mailto:xstroughter@gmail.com">xstroughter@gmail.com</a>
      </p>
    </form>
  );
}
