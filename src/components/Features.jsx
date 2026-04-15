/* Feature pill icons as inline SVGs */
const MatchingIcon = () => (
  <img
    src="/images/wave.png"
    alt="Matching icon"
    className="h-10 w-10 object-contain"
    loading="lazy"
  />
);

const PersonnalisationIcon = () => (
  <img
    src="/images/etoile.png"
    alt="Personnalisation icon"
    className="h-10 w-10 object-contain"
    loading="lazy"
  />
);

const FavorisIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
    <path d="M20 35s-1.4-.7-3.5-2.1C10.2 28.3 4 22.2 4 15.5 4 10.3 8.3 6 13.5 6c3 0 5.8 1.4 6.5 3.6C20.7 7.4 23.5 6 26.5 6 31.7 6 36 10.3 36 15.5c0 6.7-6.2 12.8-12.5 17.4C21.4 34.3 20 35 20 35z" />
  </svg>
);


const DossierIcon = () => (
  <img
    src="/images/box.png"
    alt="Dossiers d'adoption icon"
    className="h-10 w-10 object-contain"
    loading="lazy"
  />
);

const ChatIcon = () => (
  <img
    src="/images/chat.png"
    alt="Chat icon"
    className="h-10 w-10 object-contain"
    loading="lazy"
  />
);

const features = [
  {
    title: "Matching",
    text: "Humain-animal",
    icon: <MatchingIcon />, 
    position: "top-left",
    variant: "light",
  },
  {
    title: "Favoris",
    text: "Mettez de côté les animaux qui vous plaisent.",
    icon: <FavorisIcon />, 
    position: "bot-left",
    variant: "orange",
  },
  {
    title: "Personnalisation",
    text: "Recherche par filtres personnalisés pour avoir l'animal qui vous correspond le mieux !",
    icon: <PersonnalisationIcon />, 
    position: "top-right",
    variant: "orange",
  },
  {
    title: "Dossiers d'adoption",
    text: "Vos informations sont envoyées en temps réel aux associations.",
    icon: <DossierIcon />, 
    position: "bot-right",
    variant: "light",
  },
];

function FeatureCard({ title, text, icon, variant }) {
  const isOrange = variant === "orange";
  
  return (
    <div
      className={`flex items-center gap-4 min-h-24 w-full rounded-full px-5 py-3 transition-transform ${
        isOrange
          ? "bg-orange text-white"
          : "bg-salmon-light text-brown"
      }`}
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-orange`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-extrabold">{title}</h3>
        <p className="mt-1 text-sm leading-snug opacity-90">{text}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const leftFeatures = features.filter((f) =>
    ["top-left", "bot-left"].includes(f.position)
  );

  const rightFeatures = features.filter((f) =>
    ["top-right", "bot-right"].includes(f.position)
  );

  return (
    <section id="fonctionnalites" className="bg-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-4xl font-black text-brown md:text-5xl">
          À quoi sert l'app ?
        </h2>

        {/* Mobile and tablet */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <div className="flex w-full flex-col gap-6">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title + f.position} {...f} />
            ))}
          </div>

          <div className="relative mx-4 w-[260px] shrink-0 md:w-[300px]">
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="/images/features-phone.png"
                alt="Patoo app - écran Sully"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-6">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title + f.position} {...f} />
            ))}
          </div>
        </div>

        {/* Desktop: composition around phone */}
        <div className="relative mx-auto hidden h-[600px] w-full max-w-[1240px] lg:block">
          <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2">
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="/images/features-phone.png"
                alt="Patoo app - écran Sully"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Left Cards */}
          <div className="absolute left-0 top-[25%] w-[360px]">
            <FeatureCard {...leftFeatures[0]} />
          </div>
          <div className="absolute left-0 top-[60%] w-[360px]">
            <FeatureCard {...leftFeatures[1]} />
          </div>

          {/* Right Cards */}
          <div className="absolute right-0 top-[25%] w-[360px]">
            <FeatureCard {...rightFeatures[0]} />
          </div>
          <div className="absolute right-0 top-[60%] w-[360px]">
            <FeatureCard {...rightFeatures[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
