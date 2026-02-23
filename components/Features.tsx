const features = [
  {
    title: "Oppskriftsbibliotek",
    text: "Last opp og organiser PDF-er og favoritter.",
    icon: "M3 5h18M3 12h18M3 19h18",
  },
  {
    title: "Prosjekter",
    text: "Oversikt over hva du strikker nå og senere.",
    icon: "M4 6h16v12H4zM8 10h8M8 14h5",
  },
  {
    title: "Garnlager",
    text: "Hold styr på garn du har hjemme.",
    icon: "M12 3l7 4v10l-7 4-7-4V7l7-4zm0 0v18",
  },
  {
    title: "Inspirasjon",
    text: "Feed med ideer, bilder og prosjekter.",
    icon: "M4 18l5-6 4 4 3-4 4 6M4 6h16v12H4z",
  },
  {
    title: "Ønskelister",
    text: "Lag lister over prosjekter og garn du vil ha.",
    icon: "M12 20s-7-4.35-7-10a4 4 0 017-2 4 4 0 017 2c0 5.65-7 10-7 10z",
  },
  {
    title: "Community",
    text: "Del fremgang, få tips og finn nye mønstre.",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 108 0 4 4 0 10-8 0zm12 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
] as const;

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-neutral-900"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 max-w-2xl">
          <h2
            id="features-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
          >
            Funksjoner som gir oversikt i strikkehverdagen
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
            Alt du trenger for å samle oppskrifter, prosjekter og ideer på ett
            sted.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
                <Icon path={feature.icon} />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-neutral-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
