"use client";

import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

import { contactSupportContent } from "../content/contact-support.content";

const fieldBase =
  "w-full rounded-md border border-brand-secondary/40 bg-white px-3 text-xs text-brand-secondary placeholder:text-brand-tertiary/70 focus:border-brand-primary focus:outline-none";

export function ContactForm() {
  const { fields, submitLabel } = contactSupportContent;
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: post to the contact endpoint through src/services once it exists.
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      {fields.map((field) => {
        const id = `contact-${field.name}`;
        const common = {
          id,
          name: field.name,
          value: values[field.name] ?? "",
          placeholder: field.placeholder,
          required: field.required,
          onChange: (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => setValues((prev) => ({ ...prev, [field.name]: event.target.value })),
        };

        return (
          <div key={field.name} className={field.width === "full" ? "sm:col-span-2" : undefined}>
            <label htmlFor={id} className="mb-2 block text-xs text-brand-secondary">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea {...common} rows={3} className={cn(fieldBase, "min-h-[60px] resize-none py-3")} />
            ) : (
              <input {...common} type={field.type} className={cn(fieldBase, "h-10")} />
            )}
          </div>
        );
      })}

      <div className="pt-1 sm:col-span-2">
        <button
          type="submit"
          className="h-12 w-full cursor-pointer rounded-md bg-brand-secondary text-xs font-medium text-white shadow-[0_8px_16px_-6px_rgb(21_29_50/0.5)] transition-colors hover:bg-brand-secondary-hover"
        >
          {sent ? "Thanks - we will be in touch" : submitLabel}
        </button>
      </div>
    </form>
  );
}