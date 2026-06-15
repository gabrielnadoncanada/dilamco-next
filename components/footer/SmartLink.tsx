import { AppLink as Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * SmartLink component that automatically uses Next.js Link for internal routes
 * and regular <a> tag for external URLs.
 */
export function SmartLink({
  href,
  children,
  className,
  target,
  rel,
}: SmartLinkProps) {
  const isInternal = href.startsWith("/");
  
  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  
  return (
    <a
      href={href}
      target={target || "_blank"}
      rel={rel || "noreferrer"}
      className={className}
    >
      {children}
    </a>
  );
}
