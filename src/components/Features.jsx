/* Feature pill icons as inline SVGs */
const MatchingIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
    <circle cx="20" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" />
    <path d="M24 30l4-4m0 0l-2 8 8-2-4-4z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PersonnalisationIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
    <path d="M20 4l4.9 9.9 10.9 1.6-7.9 7.7 1.9 10.8L20 29l-9.8 5.1 1.9-10.8-7.9-7.7 10.9-1.6z" />
  </svg>
);

const FavorisIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
    <path d="M20 35s-1.4-.7-3.5-2.1C10.2 28.3 4 22.2 4 15.5 4 10.3 8.3 6 13.5 6c3 0 5.8 1.4 6.5 3.6C20.7 7.4 23.5 6 26.5 6 31.7 6 36 10.3 36 15.5c0 6.7-6.2 12.8-12.5 17.4C21.4 34.3 20 35 20 35z" />
  </svg>
);

const CatIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="currentColor">
    {/* Cat face */}
    <path d="M8 14l4-10 6 6h4l6-6 4 10v8c0 6-5 12-12 12S8 28 8 22z" />
    <circle cx="16" cy="20" r="2" fill="white" />
    <circle cx="24" cy="20" r="2" fill="white" />
    <ellipse cx="20" cy="24" rx="2" ry="1.5" fill="white" />
  </svg>
);

const DossierIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="10" width="28" height="22" rx="3" />
    <path d="M6 16h28" />
    <path d="M14 10V7a3 3 0 013-3h6a3 3 0 013 3v3" />
    <circle cx="20" cy="24" r="4" />
    <path d="M20 22v4m-2-2h4" />
  </svg>
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
    title: "Personnalisation",
    text: "Recherche par filtres personnalisés pour avoir l'animal qui vous correspond le mieux !",
    icon: <PersonnalisationIcon />,
    position: "top-right",
    variant: "orange",
  },
  {
    title: "Favoris",
    text: "Explication fonctionnalité dnjzzjdnjzndjznjdnzaj",
    icon: <FavorisIcon />,
    position: "mid-left",
    variant: "orange",
  },
  {
    title: "Titre",
    text: "Explication fonctionnalité dnjzzjdnjzndjznjdnzaj",
    icon: <CatIcon />,
    position: "mid-right",
    variant: "light",
  },
  {
    title: "Dossiers d'adoption",
    text: "Explication fonctionnalité dnjzzjdnjzndjznjdnzaj",
    icon: <DossierIcon />,
    position: "bot-left",
    variant: "light",
  },
  {
    title: "Titre",
    text: "Explication fonctionnalité dnjzzjdnjzndjznjdnzaj",
    icon: <CatIcon />,
    position: "bot-right",
    variant: "orange",
  },
];

function FeatureCard({ title, text, icon, variant }) {
  const isOrange = variant === "orange";
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl px-5 py-4 shadow-sm ${
        isOrange
          ? "bg-orange text-white"
          : "bg-salmon-light text-brown"
      }`}
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
          isOrange ? "bg-white/20 text-white" : "bg-white text-orange"
        }`}
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
  return (
    <section id="fonctionnalites" className="bg-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-4xl font-black text-brown md:text-5xl">
          À quoi sert l'app ?
        </h2>

        {/* Layout: left cards | phone | right cards */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
          {/* Left column */}
          <div className="flex w-full flex-col gap-6 lg:w-[300px]">
            {features
              .filter((f) =>
                ["top-left", "mid-left", "bot-left"].includes(f.position)
              )
              .map((f) => (
                <FeatureCard key={f.title + f.position} {...f} />
              ))}
          </div>

          {/* Center phone */}
          <div className="relative mx-4 w-[260px] shrink-0 md:w-[300px]">
            <div className="rounded-[3rem] bg-black p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2.5rem] bg-cream">
                <img
                  src="/images/features-phone.png"
                  alt="Patoo app - écran Sully"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex w-full flex-col gap-6 lg:w-[300px]">
            {features
              .filter((f) =>
                ["top-right", "mid-right", "bot-right"].includes(f.position)
              )
              .map((f) => (
                <FeatureCard key={f.title + f.position} {...f} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
