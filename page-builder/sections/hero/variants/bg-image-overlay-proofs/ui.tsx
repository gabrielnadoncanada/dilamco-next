import Image from "@/components/elements/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { HeroBgImageOverlayProofsProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function HeroBgImageOverlayProofs(props: HeroBgImageOverlayProofsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {props.overlay === "dark-gradient" ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        ) : null}
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-2xl">
          {props.badges?.length ? (
            <div className="flex flex-wrap gap-2">
              {props.badges.map((b) => (
                <Badge
                  key={b}
                  className="bg-white/10 text-white hover:bg-white/10"
                  variant="default"
                >
                  {b}
                </Badge>
              ))}
            </div>
          ) : null}

          <Heading as="h1" variant="h1" className="mt-6 text-white">{props.heading}</Heading>

          <div className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            <p>{props.description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto" variant={primary.variant ?? "default"}>
              <Link href={primary.href}>{primary.label}</Link>
            </Button>

            {secondary ? (
              <Button asChild size="lg" className="w-full sm:w-auto" variant={secondary.variant ?? "secondary"}>
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>

          {props.proofs?.length ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {props.proofs.map((p) => (
                <Card
                  key={p.title}
                  className="border-white/15 bg-white/5 text-white backdrop-blur-md"
                >
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="mt-1 text-xs text-white/80">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}