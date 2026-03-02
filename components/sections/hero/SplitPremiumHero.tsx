import { Image } from "@/components/elements/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type HeroSectionProps } from "../HeroSection";

const SplitPremiumHero = ({
  heading,
  description,
  list,
  badges,
  actions,
  actionsSlot,
  image = {
    src: "/images/hero-image.webp",
    alt: "Hero Image",
  },
  imagePriority = true,
  proofs,
  className,
  ...props
}: HeroSectionProps) => {
  void list;

  return (
    <section className={className ? `relative overflow-hidden ${className}` : "relative overflow-hidden"} {...props}>
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={imagePriority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="max-w-2xl">
          {badges && badges.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={`${badge}-${index}`} className="bg-white/10 text-white hover:bg-white/10">
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heading}
          </h1>

          {description ? (
            <div className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          ) : null}

          {actionsSlot ? (
            <div className="mt-8">{actionsSlot}</div>
          ) : actions && actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions.map((action, index) => {
                const { text, href, variant, icon: Icon, ...buttonProps } = action;
                return (
                  <Button
                    key={`${href}-${index}`}
                    asChild
                    size="lg"
                    variant={variant ?? "default"}
                    className="w-full sm:w-auto"
                    {...buttonProps}
                  >
                    <a href={href}>
                      {text}
                      {Icon ? <Icon className="size-4" /> : null}
                    </a>
                  </Button>
                );
              })}
            </div>
          ) : null}

          {proofs && proofs.length > 0 ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {proofs.map((proof, index) => (
                <Card key={`${proof.title}-${index}`} className="border-white/15 bg-white/5 text-white backdrop-blur-md">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{proof.title}</p>
                    <p className="mt-1 text-xs text-white/80">{proof.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export { SplitPremiumHero };
