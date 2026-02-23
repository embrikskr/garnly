export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer-lenker" className="flex flex-wrap gap-4">
          <a
            href="#"
            className="hover:text-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
          >
            Personvern
          </a>
          <a
            href="#"
            className="hover:text-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
          >
            Vilkår
          </a>
          <a
            href="mailto:hei@garnly.no"
            className="hover:text-[#a34162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2"
          >
            Kontakt
          </a>
        </nav>

        <p>© {year} Garnly</p>
      </div>
    </footer>
  );
}
