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
          <h1 className="text-4xl font-extrabold leading-tight text-brown md:text-5xl">
            Patoo App
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-brown md:text-4xl leading-snug">
            L'adoption, rendue<br />simple et significative
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-brown max-w-[400px]">
            Élimine la paperasse : matche un animal et laisse Patoo transmettre tes informations directement aux associations.
          </p>
          <a
            href="#telecharger"
            className="mt-8 inline-block rounded-full bg-orange px-10 py-4 text-lg font-bold text-white shadow-md transition hover:scale-105"
          >
            Télécharger l'app
          </a>
        </div>
      </div>
    </section>
  );
}
