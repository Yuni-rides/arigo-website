import { Reveal } from "@/components/motion";
import { Container, QrCode } from "@/components/ui";

import { downloadAppContent } from "../content/download-app.content";
import { DownloadAppShowcase } from "./download-app-showcase";

export async function DownloadAppSection() {
  const { apps, ...copy } = downloadAppContent;

  // QR codes are SVG strings generated on the server; the client showcase just swaps them.
  const qrCodes = Object.fromEntries(
    apps.map((app) => [
      app.id,
      <QrCode key={app.id} value={app.downloadUrl} label={`QR code to download the ${app.name}`} />,
    ]),
  );

  return (
    <section id="download" className="scroll-mt-24 bg-[#FAF6F0] py-20 sm:py-28">
      <Container>
        <Reveal>
          <DownloadAppShowcase {...copy} apps={apps} qrCodes={qrCodes} />
        </Reveal>
      </Container>
    </section>
  );
}
