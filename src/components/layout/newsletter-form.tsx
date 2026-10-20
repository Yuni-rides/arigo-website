"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { footerNewsletter } from "@/config/footer";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: post to the newsletter endpoint through src/services once it exists.
    setSent(true);
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="flex h-14 items-center rounded-lg border border-brand-primary p-0.5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={sent ? "Thanks for subscribing" : footerNewsletter.placeholder}
        className="h-full min-w-0 flex-1 bg-transparent pl-3.5 text-sm text-white placeholder:text-white focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="grid h-full w-14 shrink-0 cursor-pointer place-items-center rounded-md bg-brand-primary text-white transition-opacity hover:opacity-90"
      >
        <Send className="size-5" />
      </button>
    </form>
  );
}
