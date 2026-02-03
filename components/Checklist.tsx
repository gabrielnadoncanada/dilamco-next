import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
  iconClassName?: string;
  itemClassName?: string;
}

export const Checklist = ({
  items,
  className,
  iconClassName,
  itemClassName,
  ...props
}: ChecklistProps) => {
  return (
    <ul className={cn("space-y-4 text-left", className)} {...props}>
      {items.map((item, index) => (
        <li key={index} className={cn("flex items-center gap-3", itemClassName)}>
          <Check className={cn("size-5", iconClassName)} />
          <p className="text-muted-foreground">{item}</p>
        </li>
      ))}
    </ul>
  );
};
