import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: Props) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "btn-base",
        variant === "primary"
          ? "bg-peak-400 text-ink-950 hover:bg-peak-300 dark:bg-peak-400 dark:text-ink-950 light:bg-[#185bb0] light:text-white light:hover:bg-[#1f6fd0]"
          : "border hover:border-peak-400",
        variant === "ghost" && "border-[var(--line)] text-[var(--ink)]",
        className
      )}
      style={variant === "ghost" ? { borderColor: "var(--line)" } : undefined}
    >
      {children}
    </Link>
  );
}
