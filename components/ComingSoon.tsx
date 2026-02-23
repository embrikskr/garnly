export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      aria-labelledby="coming-soon-heading"
      className="scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px] rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-[#f1dde4] bg-[#fdf5f8] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#a34162]">
              Langsiktig visjon
            </p>
            <h2
              id="coming-soon-heading"
              className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
            >
              Garnly for lokale garnbutikker (kommer senere)
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Målet er å samle butikker, designere og strikkere i én felles
              infrastruktur – så veien fra inspirasjon til riktig garn blir kort
              og lokal.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
              Hva vi ser for oss
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 text-[#a34162]">
                  •
                </span>
                <span>Felles digital synlighet for små butikker</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 text-[#a34162]">
                  •
                </span>
                <span>Smartere lager og routing til nærmeste butikk</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 text-[#a34162]">
                  •
                </span>
                <span>Felles kampanjer og stordriftsfordeler</span>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-sm font-medium text-neutral-900">
                Vil du være med?
              </p>
              <a
                href="mailto:partners@garnly.no"
                className="mt-2 inline-flex text-sm font-medium text-[#a34162] underline decoration-[#e7bcc9] underline-offset-4 hover:decoration-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
              >
                partners@garnly.no
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
