import { SmartLink } from "./SmartLink";
import { cn } from "@/lib/utils";

interface LogoProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function Logo({ url, children, className }: LogoProps) {
  return (
    <SmartLink href={url} className={cn("flex items-center gap-2", className)}>
      {children}
    </SmartLink>
  );
}

interface LogoImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export function LogoImage({ src, alt, title, className }: LogoImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={cn("w-30 dark:invert", className)}
    />
  );
}

interface LogoTextProps {
  children: React.ReactNode;
  className?: string;
}

export function LogoText({ children, className }: LogoTextProps) {
  return (
    <span className={cn("text-xl font-semibold", className)}>
      {children}
    </span>
  );
}
