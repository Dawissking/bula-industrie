import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#D4A017] text-[#0B0B0B] shadow-sm",
        secondary:
          "border-transparent bg-[#0B0B0B] text-white shadow-sm",
        outline:
          "border-[#D4A017] text-[#D4A017]",
        destructive:
          "border-transparent bg-red-600 text-white shadow-sm",
        success:
          "border-transparent bg-[#4CAF50] text-white shadow-sm",
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
