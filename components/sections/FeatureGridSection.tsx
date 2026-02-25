import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

import { ActionButtons, type ActionButton } from "@/components/ActionButtons"
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import type { FeatureGridItem } from "@/types/sections"

interface FeatureGridSectionProps
  extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children"> {
  heading: string
  intro?: ReactNode
  eyebrow?: string
  items: FeatureGridItem[]
  columns?: 2 | 3 | 4
  links?: ActionButton[]
  className?: string
}

const gridColsClass: Record<NonNullable<FeatureGridSectionProps["columns"]>, string> =
{
  2: "md:grid md:grid-cols-2 [&>div]:flex-[1_0_300px]",
  3: "md:grid-cols-3 [&>div]:flex-[1_0_300px]",
  4: "md:grid-cols-4",
}

export function FeatureGridSection({
  heading,
  intro,
  eyebrow,
  items,
  links,
  columns = 3,
  className,
  ...props
}: FeatureGridSectionProps) {
  return (
    <SectionShell
      title={heading}
      intro={intro}
      eyebrow={eyebrow}
      actions={links?.length ? <ActionButtons buttons={links} /> : undefined}
      align="center"
      className={cn("relative overflow-hidden", className)}
      headerClassName="relative flex flex-col items-center text-center"
      {...props}
    >
      <ItemGroup className={cn("flex flex-wrap flex-row  gap-6 md:gap-8", gridColsClass[columns])}>
        {items.map((item) => {
          const key = item.href ?? item.title
          const Icon = item.icon

          const card = (
            <Item variant="outline" className="h-full ">
              {Icon && (
                <ItemMedia variant="icon">
                  <Icon className="size-5" aria-hidden="true" />
                </ItemMedia>
              )}

              <ItemContent className="gap-1">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemContent>
            </Item>
          )

          return item.href ? (
            <a
              key={key}
              href={item.href}
              className="block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {card}
            </a>
          ) : (
            <div key={key} className="h-full ">
              {card}
            </div>
          )
        })}
      </ItemGroup>
    </SectionShell>
  )
}