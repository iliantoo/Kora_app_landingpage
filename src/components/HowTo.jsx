const steps = [
  {
    title: "Onboarding",
    text: "Dès l'ouverture de l'app, tu réponds à un questionnaire de sensibilisation. Cela te permet de réfléchir à ce que représente vraiment une adoption, pour être sûr de prendre une décision sereine.",
    variant: "orange",
  },
  {
    title: "Inscription et profil",
    text: "Une fois ce temps de réflexion posé, tu crées ton compte en quelques clics et complètes ton profil avec tes préférences (chat/chien, caractère, âge, niveau d'énergie…).\n\nGrâce à ces infos, l'app peut te proposer des profils adaptés à la réalité du quotidien, pour maximiser les chances d'une rencontre qui dure.",
    variant: "light",
  },
  {
    title: "Découverte des animaux",
    text: "Tu accèdes ensuite aux profils de chats et de chiens des refuges partenaires, présentés comme sur une app de rencontre, pour repérer rapidement ceux qui te touchent vraiment.\n\nTu peux ajouter tes coups de cœur en favoris, prendre le temps de comparer, en discuter avec tes proches, et avancer à ton propre rythme.",
    variant: "light",
  },
  {
    title: "Suivi des dossiers d'adoption",
    text: "Quand tu es prêt, tu déposes ta demande d'adoption directement depuis la fiche de l'animal, puis tu suis chaque étape de ton dossier au même endroit.\n\nTu gagnes en clarté et en tranquillité d'esprit : plus de pertes d'infos, tu sais toujours où tu en es avec le refuge jusqu'à l'arrivée de ton nouveau compagnon à la maison.",
    variant: "light",
  },
];

function TimelineDot({ isFirst }) {
  if (isFirst) {
    // First dot: small filled orange circle
    return (
      <div
        className="shrink-0 rounded-full bg-orange"
        style={{ width: "16px", height: "16px" }}
      />
    );
  }
  // Other dots: donut ring — salmon outer ring with beige center and small salmon inner dot
  return (
    <div
      className="shrink-0 rounded-full bg-salmon flex items-center justify-center"
      style={{ width: "28px", height: "28px" }}
    >
      <div
        className="rounded-full bg-beige flex items-center justify-center"
        style={{ width: "18px", height: "18px" }}
      >
        <div
          className="rounded-full bg-salmon"
          style={{ width: "8px", height: "8px" }}
        />
      </div>
    </div>
  );
}

function StepCard({ title, text, variant, isFirst, isLast }) {
  const isOrange = variant === "orange";
  return (
    <div className="flex items-stretch gap-3">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        {/* Top segment of line (before dot) */}
        {!isFirst && (
          <div
            className="w-0 flex-none"
            style={{
              height: "12px",
              borderLeft: "3px dashed #F4B9A7",
            }}
          />
        )}
        <TimelineDot isFirst={isFirst} />
        {/* Bottom segment of line (after dot) */}
        {!isLast && (
          <div
            className="w-0 flex-1"
            style={{
              minHeight: "20px",
              borderLeft: "3px dashed #F4B9A7",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="mb-2 flex-1 rounded-xl px-4 py-3 transition-all duration-300 ease-in-out cursor-pointer bg-transparent text-brown hover:bg-orange hover:text-white"
      >
        <h3 className="text-base font-extrabold leading-tight">{title}</h3>
        {text.split("\n\n").map((p, i) => (
          <p key={i} className="mt-1.5 text-xs leading-relaxed opacity-80">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function HowTo() {
  return (
    <section id="utilisation" className="bg-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-4xl font-black text-brown md:text-5xl">
          Comment l'utiliser ?
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left: hand holding phone */}
          <div className="flex w-full justify-center md:w-5/12">
            <div className="relative w-[220px] md:w-[280px]">
              <img
                src="/images/howto-hand.png"
                alt="Main tenant un téléphone"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: timeline */}
          <div className="w-full max-w-md md:w-6/12">
            {steps.map((step, i) => (
              <StepCard
                key={step.title}
                {...step}
                isFirst={i === 0}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
