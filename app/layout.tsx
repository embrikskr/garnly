import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://garnly.no"),
  title: {
    default: "Garnly",
    template: "%s | Garnly",
  },
  description:
    "Garnly samler oppskrifter, prosjekter og inspirasjon for strikkere i én app.",
  openGraph: {
    title: "Garnly",
    description:
      "Samle oppskrifter, hold kontroll på prosjekter og få inspirasjon i et community.",
    type: "website",
    locale: "nb_NO",
    siteName: "Garnly",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
