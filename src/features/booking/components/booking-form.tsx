"use client";

import { ChevronDown } from "lucide-react";
import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

import { bookingContent } from "../content/booking.content";
import { submitBooking } from "../services/submit-booking";
import type { BookingField, ServiceId } from "../types";

const fieldBase =
  "h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-brand-secondary placeholder:text-brand-tertiary/80 focus:border-brand-primary focus:outline-none";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-brand-secondary">
      {children}
    </label>
  );
}

function Field({
  field,
  value,
  onChange,
}: {
  field: BookingField;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `booking-${field.name}`;

  if (field.type === "radio") {
    return (
      <fieldset>
        <legend className="mb-1.5 text-[13px] font-medium text-brand-secondary">{field.label}</legend>
        <div className="grid grid-cols-2 gap-4">
          {field.options?.map((option) => {
            const checked = value === option;
            return (
              <label
                key={option}
                className={cn(
                  "flex h-12 cursor-pointer items-center gap-2.5 rounded-md border px-4 text-sm transition-colors",
                  checked
                    ? "border-brand-primary bg-brand-primary/20 text-brand-secondary"
                    : "border-border bg-white text-brand-tertiary",
                )}
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={checked}
                  onChange={() => onChange(option)}
                  className="size-4 accent-brand-primary"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <Label htmlFor={id}>{field.label}</Label>
        <div className="relative">
          <select
            id={id}
            name={field.name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            required={field.required}
            className={cn(fieldBase, "appearance-none pr-10", value === "" && "text-brand-tertiary/80")}
          >
            {/* Prompt only - it must not read as a third service in the list */}
            <option value="" disabled hidden>
              {field.placeholder}
            </option>
            {field.options?.map((option) => (
              <option key={option} value={option} className="text-brand-secondary">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-brand-secondary"
            aria-hidden
          />
        </div>
      </div>
    );
  }

  // A datetime input always renders the native "dd/mm/yyyy" mask, which hides the
  // placeholder - so it stays a text box until it is focused.
  const isDateTime = field.type === "datetime-local";

  return (
    <div>
      <Label htmlFor={id}>{field.label}</Label>
      <input
        id={id}
        name={field.name}
        type={isDateTime ? "text" : field.type}
        onFocus={isDateTime ? (event) => (event.currentTarget.type = "datetime-local") : undefined}
        onBlur={
          isDateTime
            ? (event) => {
                if (!event.currentTarget.value) event.currentTarget.type = "text";
              }
            : undefined
        }
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={field.placeholder}
        required={field.required}
        className={cn(fieldBase, field.width === "full" && field.name === "notes" && "h-[60px]")}
      />
    </div>
  );
}

export function BookingForm() {
  const { serviceField, fields, submitLabel } = bookingContent;
  const [service, setService] = useState<ServiceId | "">("");
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  // Nothing picked yet: show the ride fields, which is the state the design shows.
  const activeService: ServiceId = service === "" ? "medical-ride" : service;
  const visible = fields.filter((field) => !field.services || field.services.includes(activeService));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      await submitBooking({ [serviceField.name]: activeService, ...values });
      setValues({});
      setService("");
      setStatus("sent");
    } catch (cause) {
      setStatus("idle");
      setError(cause instanceof Error ? cause.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
      {/* Service picker drives which fields below are shown */}
      <div className="sm:col-span-2">
        <Field
          field={{
            name: serviceField.name,
            label: serviceField.label,
            placeholder: serviceField.placeholder,
            type: "select",
            options: serviceField.options.map((option) => option.label),
          }}
          value={serviceField.options.find((option) => option.id === service)?.label ?? ""}
          onChange={(label) =>
            setService(serviceField.options.find((option) => option.label === label)?.id ?? "")
          }
        />
      </div>

      {visible.map((field) => (
        <div key={field.name} className={field.width === "full" ? "sm:col-span-2" : undefined}>
          <Field
            field={field}
            value={values[field.name] ?? ""}
            onChange={(next) => setValues((prev) => ({ ...prev, [field.name]: next }))}
          />
        </div>
      ))}

      <div className="pt-2 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-14 w-full rounded-md bg-brand-secondary text-sm font-medium text-white transition-colors hover:bg-brand-secondary-hover disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : status === "sent" ? "Thanks - we will be in touch" : submitLabel}
        </button>

        {error && (
          <p role="alert" className="mt-3 text-[13px] text-brand-primary">
            {error}
          </p>
        )}
        {status === "sent" && (
          <p role="status" className="mt-3 text-[13px] text-brand-secondary/80">
            Your request has reached our team. We will call you to confirm the details.
          </p>
        )}
      </div>
    </form>
  );
}
