"use client";

import { useEffect, useState } from "react";

export function useMobileNav(breakpoint: number) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoint) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const close = () => {
    setOpen(false);
  };

  return { open, toggle, close, setOpen };
}
