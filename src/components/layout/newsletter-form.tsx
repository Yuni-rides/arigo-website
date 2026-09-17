"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { footerNewsletter } from "@/config/footer";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("done");
    setEmail("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-stretch gap-2 rounded-lg border border-brand-primary p-1.5"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={status === "done" ? "Thanks - you are subscribed!" : footerNewsletter.placeholder}
        className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/70 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-primary text-white transition-colors hover:bg-brand-primary-hover"
      >
        <Send className="size-4" />
      </button>
    </form>
  );
}
