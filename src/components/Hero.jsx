export default function Hero() {
  return (
    <section className="overflow-hidden bg-beige py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-20">
        {/* Phone mockup */}
        <div className="relative flex w-full justify-center md:w-1/2">
          <div className="relative w-[280px] md:w-[320px]">
            {/* Phone frame with shadow and tilt */}
            <div className="-rotate-6 overflow-hidden rounded-[2.5rem]">
              {/* Placeholder for login screen mockup */}
              <img
                src="/images/hero-phone.png"
                alt="Patoo app écran de connexion"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-5xl font-black leading-tight text-brown md:text-6xl">
            Patoo App
          </h1>
          <h2 className="mt-3 text-2xl font-bold text-brown md:text-3xl">
            Sous-titre de l'app
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brown-light">
            Paragraphe
          </p>
          <a
            href="#telecharger"
            className="mt-8 inline-block rounded-full bg-orange px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
          >
            Télécharger l'app
          </a>
        </div>
      </div>
    </section>
  );
}
