"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function SectionHeaderMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timelines: gsap.core.Timeline[] = [];
    const splits: SplitType[] = [];

    document
      .querySelectorAll<HTMLElement>("[data-animate-header-wrap]")
      .forEach((header) => {
        if (header.dataset.animateHeaderReady === "true") return;

        const headingWrap = header.querySelector<HTMLElement>(
          "[data-animate-header-heading]"
        );
        const text = header.querySelector<HTMLElement>("[data-animate-header-text]");
        const cta = header.querySelector<HTMLElement>("[data-animate-header-cta]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top bottom",
            end: "top 80%",
            toggleActions: "none play none reset",
          },
        });

        if (headingWrap) {
          const headingTarget =
            headingWrap.querySelector<HTMLElement>("h1, h2, h3, h4, h5, h6") ??
            headingWrap;

          const split = new SplitType(headingTarget, {
            types: "words",
            tagName: "span",
          });
          splits.push(split);

          const words = split.words ?? [];
          if (words.length > 0) {
            tl.from(words, {
              autoAlpha: 0,
              duration: 1,
              ease: "power2.out",
              stagger: { amount: 0.2 },
            });
          }
        }

        if (text) {
          tl.from(
            text,
            {
              autoAlpha: 0,
              y: 10,
              duration: 0.75,
              ease: "power2.out",
            },
            "<+30%"
          );
        }

        if (cta) {
          tl.from(
            cta,
            {
              autoAlpha: 0,
              y: 10,
              duration: 0.75,
              ease: "power2.out",
            },
            "<+25%"
          );
        }

        header.dataset.animateHeaderReady = "true";
        timelines.push(tl);
      });

    document
      .querySelectorAll<HTMLElement>("[data-animate-card-wrap]")
      .forEach((cardWrap) => {
        if (cardWrap.dataset.animateCardReady === "true") return;

        const cards = cardWrap.querySelectorAll<HTMLElement>(
          "[data-animate-card-card]"
        );
        if (cards.length === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardWrap,
            start: "top bottom",
            end: "top 70%",
            toggleActions: "none play none none",
          },
        });

        tl.from(cards, {
          autoAlpha: 0,
          y: 20,
          duration: 0.75,
          stagger: { each: 0.1 },
          ease: "power2.out",
        });

        cardWrap.dataset.animateCardReady = "true";
        timelines.push(tl);
      });

    return () => {
      timelines.forEach((tl) => tl.kill());
      splits.forEach((split) => split.revert());
      ScrollTrigger.refresh();
    };
  }, [pathname]);

  return null;
}
