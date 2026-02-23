"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Er Garnly gratis?",
    answer:
      "Ja, Garnly er planlagt med en gratis grunnopplevelse. Eventuelle premium-funksjoner kommuniseres tydelig senere.",
  },
  {
    question: "Kan jeg lagre PDF-oppskrifter?",
    answer:
      "Ja, du kan lagre og organisere PDF-oppskrifter og favoritter i oppskriftsbiblioteket.",
  },
  {
    question: "Fungerer Garnly på både iPhone og Android?",
    answer:
      "Ja, målet er støtte for både iPhone og Android via App Store og Google Play.",
  },
  {
    question: "Kommer nettbutikk for garn?",
    answer:
      "Ja, butikkdelen er en del av den langsiktige visjonen og kommer senere, med fokus på lokale garnbutikker.",
  },
  {
    question: "Kan jeg bruke community på web også?",
    answer:
      "Web-opplevelse for community vurderes, men primærfokus er mobilapp først.",
  },
  {
    question: "Hvordan håndterer dere personvern?",
    answer:
      "Vi bygger Garnly med tydelige personvernrutiner, dataminimering og kontroll over egne opplysninger. Full personvernerklæring publiseres ved lansering.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 max-w-2xl">
          <h2
            id="faq-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
          >
            Ofte stilte spørsmål
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
            Kort svar på det viktigste før du laster ned.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-inset"
                  >
                    <span className="text-sm font-medium text-neutral-900 sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-lg leading-none transition ${
                        isOpen
                          ? "rotate-45 border-[#eed3db] bg-[#fdf5f8] text-[#a34162]"
                          : "border-neutral-200 bg-neutral-50 text-neutral-600"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
