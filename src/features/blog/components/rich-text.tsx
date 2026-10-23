import Link from "next/link";
import { Fragment } from "react";

/** Matches a markdown link: [label](href). */
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Article copy is plain text apart from the occasional source link, so the body
 * only understands markdown links - nothing else is parsed.
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) parts.push(text.slice(lastIndex, start));

    const external = /^https?:\/\//.test(href);
    parts.push(
      <Link
        key={`${href}-${start}`}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-hover"
      >
        {label.trim()}
      </Link>,
    );

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </>
  );
}
