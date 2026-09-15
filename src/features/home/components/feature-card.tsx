import type { FeatureItem } from "../types";

export function FeatureCard({ icon: Icon, title, description }: FeatureItem) {
  return (
    <article className="group h-full rounded-card border border-border bg-background p-7 shadow-card transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover">
      <span className="grid size-12 place-items-center rounded-xl bg-brand-primary-soft text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-brand-primary-foreground">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="mt-6 text-xl">{title}</h3>
      <p className="mt-2 text-brand-tertiary">{description}</p>
    </article>
  );
}
