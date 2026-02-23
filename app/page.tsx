import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Screenshots from "../components/Screenshots";
import StoreButtons from "../components/StoreButtons";
import Topbar from "../components/Topbar";

const STORE_LINKS = {
  appStore: "https://apps.apple.com/", // TODO: bytt til ekte App Store-lenke
  googlePlay: "https://play.google.com/store", // TODO: bytt til ekte Google Play-lenke
} as const;

export const metadata: Metadata = {
  title: "Garnly – alt for strikkere på ett sted",
  description:
    "Samle oppskrifter, hold kontroll på prosjekter og få inspirasjon i Garnly. Lokale garnbutikker kommer senere.",
  openGraph: {
    title: "Garnly – alt for strikkere på ett sted",
    description:
      "Samle oppskrifter, prosjekter og inspirasjon i én moderne app for strikkere.",
    url: "https://garnly.no",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Topbar {...STORE_LINKS} />

      <main>
        <Hero {...STORE_LINKS} />
        <Features />
        <Screenshots />
        <HowItWorks />
        <ComingSoon />
        <FAQ />

        <section
          id="download"
          aria-labelledby="download-heading"
          className="scroll-mt-32 px-4 pb-10 pt-6 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-[1100px]">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2
                    id="download-heading"
                    className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
                  >
                    Klar for mer oversikt og mer inspirasjon?
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 sm:text-base">
                    Har du innspill?{" "}
                    <a
                      href="mailto:hei@garnly.no"
                      className="font-medium text-[#a34162] underline decoration-[#e7bcc9] underline-offset-4 hover:decoration-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
                    >
                      Kontakt oss
                    </a>
                    .
                  </p>
                </div>

                <StoreButtons
                  appStoreHref={STORE_LINKS.appStore}
                  googlePlayHref={STORE_LINKS.googlePlay}
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
