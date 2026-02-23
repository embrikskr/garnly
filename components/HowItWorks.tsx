const steps = [
  {
    title: "Last ned appen",
    text: "Start med App Store eller Google Play og opprett konto på få minutter.",
  },
  {
    title: "Samle oppskrifter og prosjekter",
    text: "Legg inn PDF-er, favoritter og det du strikker nå eller vil starte på senere.",
  },
  {
    title: "Finn inspirasjon og planlegg neste strikk",
    text: "Bruk feed og lister til å lagre ideer og holde fremdrift i gang.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px] rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
          >
            Slik fungerer det
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
            Tre enkle steg for å få mer struktur og mer inspirasjon.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-900">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold tracking-tight text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
