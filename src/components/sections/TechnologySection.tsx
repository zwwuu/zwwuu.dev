import technologies from "@/data/technologies";

export default function TechnologySection() {
  return (
    <section className="py-8">
      <div className={"container mx-auto px-4"}>
        <div className={"flex gap-6 overflow-hidden"}>
          {technologies.map((t) => (
            <div key={`${t.name}`}>{t.icon}</div>
          ))}
        </div>
        <div className="py-2">
          <div className={"h-1 w-full bg-linear-to-r from-white via-primary/80 to-primary"} />
          <h2 className={"fl-text-4xl/6xl font-bold tracking-wider text-primary"}>technologies.</h2>
          <div className={"h-1 w-full bg-linear-to-r from-primary via-white/80 to-white"} />
        </div>
      </div>
    </section>
  );
}
