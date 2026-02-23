"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = {
  id: number;
  title: string;
  src: string;
};

const shots: Shot[] = [
  { id: 1, title: "Oppskriftsbibliotek", src: "/screens/1.png" },
  { id: 2, title: "Prosjekter", src: "/screens/2.png" },
  { id: 3, title: "Garnlager", src: "/screens/3.png" },
  { id: 4, title: "Inspirasjon", src: "/screens/4.png" },
  { id: 5, title: "Ønskelister", src: "/screens/5.png" },
  { id: 6, title: "Community", src: "/screens/6.png" },
];

function ScreenshotTile({
  shot,
  onOpen,
}: {
  shot: Shot;
  onOpen: (shot: Shot) => void;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(shot)}
      className="group relative w-full snap-start rounded-2xl border border-neutral-200 bg-white p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
      aria-label={`Åpne skjermbilde: ${shot.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
        {!failed ? (
          <Image
            src={shot.src}
            alt={`${shot.title} i Garnly`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 82vw"
            onError={() => setFailed(true)}
          />
        ) : null}

        {failed ? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Placeholder
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                {shot.title}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{shot.src}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="px-1 pb-1 pt-3">
        <p className="text-sm font-medium text-neutral-900">{shot.title}</p>
      </div>
    </button>
  );
}

function ModalScreenshot({
  shot,
  onClose,
}: {
  shot: Shot | null;
  onClose: () => void;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [shot?.id]);

  useEffect(() => {
    if (!shot) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shot, onClose]);

  if (!shot) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.title} - større visning`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-neutral-900 p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-neutral-900/80 text-white transition hover:bg-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d6df] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          aria-label="Lukk skjermbilde"
        >
          ×
        </button>

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-800">
          {!failed ? (
            <Image
              src={shot.src}
              alt={`${shot.title} i Garnly`}
              fill
              className="object-contain"
              sizes="90vw"
              onError={() => setFailed(true)}
            />
          ) : null}

          {failed ? (
            <div className="flex h-full items-center justify-center p-6 text-center text-neutral-200">
              <div>
                <p className="text-sm font-medium">{shot.title}</p>
                <p className="mt-2 text-sm text-neutral-400">
                  Legg inn bildet i <code>{shot.src}</code> for forhåndsvisning.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const [activeShot, setActiveShot] = useState<Shot | null>(null);

  return (
    <section
      id="screenshots"
      aria-labelledby="screenshots-heading"
      className="scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6">
          <h2
            id="screenshots-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
          >
            Se hvordan Garnly ser ut
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
            Mobilvisning med carousel-følelse på små skjermer og oversiktlig grid
            på desktop.
          </p>
        </div>

        <div className="grid grid-flow-col auto-cols-[82%] gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory sm:auto-cols-[58%] md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:overflow-visible md:pr-0 lg:grid-cols-3">
          {shots.map((shot) => (
            <ScreenshotTile
              key={shot.id}
              shot={shot}
              onOpen={(item) => setActiveShot(item)}
            />
          ))}
        </div>
      </div>

      <ModalScreenshot shot={activeShot} onClose={() => setActiveShot(null)} />
    </section>
  );
}
