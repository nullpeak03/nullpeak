import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cn("shell", className)} style={style}>
      {children}
    </div>
  );
}
