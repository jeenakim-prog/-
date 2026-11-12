import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-xs md:text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-accent",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent text-black font-semibold",
        secondary:
          "border-border bg-surface-hover text-foreground hover:bg-surface",
        outline:
          "border-accent/40 text-accent bg-accent-dim",
        subtle:
          "border-white/10 bg-[#1d222b] text-foreground hover:border-accent/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
