"use client";

import Image from "next/image";
import { useState } from "react";
import StoreButtons from "./StoreButtons";

type HeroProps = {
  appStore: string;
  googlePlay: string;
};

export default function Hero({ appStore, googlePlay }: HeroProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="scroll-mt-32 px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-[#f1dde4] bg-[#fdf5f8] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#a34162]">
              Ny app for strikkere
            </p>

            <h1
              id="hero-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
            >
              Garnly – alt for strikkere på ett sted
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Samle oppskrifter, hold kontroll på prosjekter og få inspirasjon i
              et community. Lokale garnbutikker kommer senere.
            </p>

            <div className="mt-7">
              <StoreButtons
                appStoreHref={appStore}
                googlePlayHref={googlePlay}
                size="md"
              />
            </div>

            <p className="mt-4 text-sm font-medium text-neutral-500">
              Rask • Enkel • Bygget for strikkere
            </p>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-3 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-neutral-200" />
              <div className="relative mt-4 aspect-[9/19] overflow-hidden rounded-[1.4rem] border border-neutral-200 bg-neutral-100">
                {!imageFailed ? (
                  <Image
                    src="/screens/hero.png"
                    alt="Forhåndsvisning av Garnly-appen"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, 80vw"
                    onError={() => setImageFailed(true)}
                    priority
                  />
                ) : null}

                {imageFailed ? (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#fbf1f4] via-white to-[#f6f8ff] p-6 text-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Mockup Placeholder
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-tight text-neutral-900">
                        Skjermdump kommer her
                      </p>
                      <p className="mt-2 text-sm text-neutral-600">
                        Legg inn fil i <code>/public/screens/hero.png</code>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
