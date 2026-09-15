import { Button, Container } from "@/components/ui";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({ title: "Page not found", noIndex: true });

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-brand-tertiary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}
