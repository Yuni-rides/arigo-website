"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { driverApplicationContent, driverApplicationFields } from "../content/driver-application.content";

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
  const [notice, setNotice] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNotice("Your application has not been submitted. Online submission is not available yet.");
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
          className="h-14 w-full rounded-[12px] bg-brand-secondary text-[13px] font-normal text-brand-secondary-foreground shadow-md transition-colors hover:bg-brand-secondary-hover"
        >
          {driverApplicationContent.submitLabel}
        </button>

        <p role="status" className="mt-3 text-xs text-brand-secondary">
          {notice}
        </p>
      </div>
    </form>
  );
}
