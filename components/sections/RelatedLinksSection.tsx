import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, LinkIcon } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";
import { Button } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import { Divider } from "../ui/divider";

interface LinkItem {
  label: string;
  href: string;
}

interface RelatedLinksSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  links: LinkItem[];
  columns?: 2 | 3;
  sectionVariant?: VariantProps<typeof Section>["variant"];
  className?: string;
}

const RelatedLinksSection = ({
  heading,
  sectionVariant = "default",
  links,
  columns = 3,
  className,
  ...props
}: RelatedLinksSectionProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <Section variant={sectionVariant} className={cn(className)} {...props}>
      <Divider />
      <Container>
        <div className="flex flex-col gap-y-[var(--_spacing---section-space--small)]">
          <div>
            <Heading variant="h1" as="h2" className="text-center">
              {heading}
            </Heading>
            <p className="text-center text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>

          <div
            className={cn(
              "group grid grid-cols-1 gap-4 md:gap-6",
              gridCols[columns]
            )}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="block">
                <Card
                  className={cn(
                    "min-h-[200px] h-full rounded-xl p-[var(--_spacing---space--2rem)]",
                    "flex flex-col justify-between transition-colors",
                    // quand on hover n'importe où dans la grille, on rend les cards transparentes...
                    "group-hover:bg-transparent",
                    // ...sauf celle hover
                    "hover:bg-card"
                  )}
                >
                  <CardHeader className="p-0 pr-[var(--_spacing---space--1-5rem)]">
                    <Heading variant="h3" className="text-2xl">
                      {link.label}
                    </Heading>
                  </CardHeader>

                  <CardFooter className="p-0 space-x-2">
                    <LinkIcon className="size-4 rotate-100" />
                    <span className="font-medium">En savoir plus</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
};

export { RelatedLinksSection };
