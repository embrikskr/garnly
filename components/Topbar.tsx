import StoreButtons from "./StoreButtons";

type TopbarProps = {
  appStore: string;
  googlePlay: string;
};

const navItems = [
  { href: "#features", label: "Funksjoner" },
  { href: "#screenshots", label: "Skjermbilder" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Topbar({ appStore, googlePlay }: TopbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <a
            href="#top"
            className="inline-flex items-center rounded-md text-base font-semibold tracking-tight text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
          >
            <span className="text-[#a34162]">G</span>arnly
          </a>

          <nav
            aria-label="Hovedmeny"
            className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto pb-1 md:order-2 md:mx-0 md:w-auto md:pb-0"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-neutral-600 transition hover:bg-[#fdf5f8] hover:text-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="order-2 md:order-3">
            <StoreButtons
              appStoreHref={appStore}
              googlePlayHref={googlePlay}
              size="sm"
              stackedOnMobile={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
