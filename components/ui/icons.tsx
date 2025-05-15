'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="black" />
      {/* Central pillar */}
      <line
        x1="128"
        y1="40"
        x2="128"
        y2="180"
        stroke="white"
        strokeWidth="12"
      />
      {/* Horizontal beam */}
      <line
        x1="80"
        y1="40"
        x2="176"
        y2="40"
        stroke="white"
        strokeWidth="12"
      />
      {/* Chains and pans */}
      <line
        x1="80"
        y1="40"
        x2="80"
        y2="120"
        stroke="white"
        strokeWidth="6"
      />
      <line
        x1="176"
        y1="40"
        x2="176"
        y2="120"
        stroke="white"
        strokeWidth="6"
      />
      {/* Pans */}
      <path
        d="M60 120 Q80 140 100 120"
        stroke="white"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M156 120 Q176 140 196 120"
        stroke="white"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  )
}

export { IconLogo }
