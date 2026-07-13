"use client";

import { ArrowRight } from "lucide-react";

import { Button, type buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { VariantProps } from "class-variance-authority";
import { PantryNotifyForm } from "./PantryNotifyForm";

type PantryBuyButtonProps = {
  label?: string;
  showArrow?: boolean;
  className?: string;
  /** Emplacement du bouton, envoyé au dataLayer (ex. "hero", "header"). */
  location?: string;
} & VariantProps<typeof buttonVariants>;

export function PantryBuyButton({
  label = "Acheter — 895 $",
  showArrow = true,
  className,
  location = "page",
  variant,
  size,
  block,
}: PantryBuyButtonProps) {
  const handleOpenChange = (open: boolean) => {
    if (open) {
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "buy_click",
        product: "alto",
        location,
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          block={block}
          className={className}
        >
          {label}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal tracking-[-0.015em]">
            Bientôt disponible
          </DialogTitle>
          <DialogDescription className="text-sm leading-6">
            ALTO, notre garde-manger 24 po, sera offert à{" "}
            <span className="font-semibold text-foreground">895 $</span>.
            Laissez vos coordonnées et nous vous aviserons dès qu&apos;il est en
            vente — avant tout le monde.
          </DialogDescription>
        </DialogHeader>
        <PantryNotifyForm idPrefix="pantry-modal" />
      </DialogContent>
    </Dialog>
  );
}
