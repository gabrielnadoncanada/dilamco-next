import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

const html = String.raw



export function Wallpaper({
  children,
  color,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="relative">{children}</div>
    </div>
  )
}
