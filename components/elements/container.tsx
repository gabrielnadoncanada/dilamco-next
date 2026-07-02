import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-[clamp(20px,1rem,56px)] max-[700px]:px-[18px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
