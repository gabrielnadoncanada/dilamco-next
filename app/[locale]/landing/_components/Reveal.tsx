"use client";

import { createElement, useEffect, useRef } from "react";

type Tag = "div" | "section" | "article" | "li" | "figure" | "header";

type RevealProps = {
  children: React.ReactNode;
  as?: Tag;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      node.classList.add("is-visible");
      return;
    }

    node.classList.add("is-pending");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove("is-pending");
            node.classList.add("is-visible");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal-up ${className}`,
      style: delay ? { animationDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
