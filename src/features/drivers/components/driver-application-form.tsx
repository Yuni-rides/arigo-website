"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { driverApplicationContent, driverApplicationFields } from "../content/driver-application.content";
import { submitDriverApplication } from "../services/submit-driver-application";

const fieldBase =
  "h-10 w-full min-w-0 rounded-md border border-[#9296C7] bg-background px-3 text-[12px] text-brand-secondary placeholder:text-brand-tertiary/60 focus:border-brand-primary focus:outline-none";

const autocomplete: Record<string, string> = {
  fullName: "name",
  email: "email",
  phone: "tel",
  city: "address-level2",
  state: "address-level1",
};

export function DriverApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // The inputs are uncontrolled, so the form element itself holds the answers.
    const form = event.currentTarget;
    const payload: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });

    setStatus("sending");
    setError("");

    try {
      await submitDriverApplication(payload);
      form.reset();
      setStatus("sent");
    } catch (cause) {
      setStatus("idle");
      setError(cause instanceof Error ? cause.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
      {driverApplicationFields.map((field) => {
        const id = `driver-application-${field.name}`;

        return (
          <div key={field.name} className={cn("min-w-0", field.type === "textarea" && "sm:col-span-2")}>
            <label
              htmlFor={id}
              className="mb-2 block text-[12px] leading-relaxed font-normal text-brand-secondary"
            >
              {field.label}
            </label>

            {field.type === "select" ? (
              <div className="relative">
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className={cn(
                    fieldBase,
                    "appearance-none pr-9",
                    "has-[option:checked[value='']]:text-brand-tertiary/60",
                  )}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>

                  {field.options?.map((option) => (
                    <option key={option} value={option} className="text-brand-secondary">
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-brand-secondary"
                />
              </div>
            ) : field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={3}
                className={cn(fieldBase, "h-[60px] min-h-[60px] resize-y py-3")}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                autoComplete={autocomplete[field.name]}
                min={field.type === "number" ? 0 : undefined}
                step={field.type === "number" ? 1 : undefined}
                className={fieldBase}
              />
            )}
          </div>
        );
      })}

      <div className="pt-6 sm:col-span-2 lg:pt-14">
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-14 w-full rounded-[12px] bg-brand-secondary text-[13px] font-normal text-brand-secondary-foreground shadow-md transition-colors hover:bg-brand-secondary-hover disabled:opacity-70"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Thanks - we will be in touch"
              : driverApplicationContent.submitLabel}
        </button>

        {error && (
          <p role="alert" className="mt-3 text-xs text-brand-primary">
            {error}
          </p>
        )}
        {status === "sent" && (
          <p role="status" className="mt-3 text-xs text-brand-secondary">
            Your application has reached our hiring team. We will get back to you shortly.
          </p>
        )}
      </div>
    </form>
  );
}
