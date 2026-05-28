import { Award, BadgeCheck, MapPin, ShieldCheck } from "lucide-react";

export function ConstructionTrustBar() {
  const items = [
    { icon: ShieldCheck, label: "RBQ 8306-0806-27" },
    { icon: Award, label: "20+ ans d'expérience" },
    { icon: MapPin, label: "Grand Montréal, Laval, Rive-Sud, Ouest-de-l'Île" },
    { icon: BadgeCheck, label: "Entièrement assuré" },
  ] as const;

  return (
    <div className="bg-primary py-5 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-sm sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2 font-medium">
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
