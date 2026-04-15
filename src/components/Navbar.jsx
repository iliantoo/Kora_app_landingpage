export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-beige/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/images/logo-patoo.png"
            alt="Patoo logo"
            style={{ height: "64px", width: "auto" }}
          />
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#fonctionnalites"
            className="text-lg font-extrabold text-brown transition hover:text-orange"
          >
            Fonctionnalités
          </a>
          <a
            href="#utilisation"
            className="text-lg font-extrabold text-brown transition hover:text-orange"
          >
            Utilisation
          </a>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#telecharger"
            className="rounded-full bg-orange px-3 py-1.5 text-xs font-bold text-white transition hover:bg-orange-dark md:px-5 md:py-2.5 md:text-sm"
          >
            Télécharger l'app
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-brown px-3 py-1.5 text-xs font-bold text-brown transition hover:bg-brown hover:text-white md:px-5 md:py-2.5 md:text-sm"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
}
