"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { footerNewsletter } from "@/config/footer";
import { subscribeToNewsletter } from "@/services/newsletter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      await subscribeToNewsletter(email);
      setEmail("");
      setStatus("sent");
    } catch (cause) {
      setStatus("idle");
      setError(cause instanceof Error ? cause.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex h-14 items-center rounded-lg border border-brand-primary p-0.5"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={status === "sent" ? "Thanks for subscribing" : footerNewsletter.placeholder}
          className="h-full min-w-0 flex-1 bg-transparent pl-3.5 text-sm text-white placeholder:text-white focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "sending"}
          className="grid h-full w-14 shrink-0 cursor-pointer place-items-center rounded-md bg-brand-primary text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          <Send className="size-5" />
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-2 text-xs text-brand-primary">
          {error}
        </p>
      )}
    </>
  );
}
