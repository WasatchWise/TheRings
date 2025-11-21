'use client'

import { cn } from '@/lib/utils'

interface CycloneRing {
  id: string
  name: string
  slug: string
  level: number
  maxLevel: number
}

interface CycloneProps {
  rings: CycloneRing[]
  className?: string
}

// Colors mapped to ring order (top to bottom of tornado)
const ringColors: Record<string, { base: string; glow: string }> = {
  self: { base: '#e85d3b', glow: '#ff7f5f' },      // Red-orange (core)
  body: { base: '#7ecce5', glow: '#a5e5f7' },      // Light cyan
  brain: { base: '#f4c542', glow: '#ffe066' },     // Gold
  bubble: { base: '#4a90d9', glow: '#6eb5ff' },    // Blue
  scene: { base: '#2d5a87', glow: '#4a7ab0' },     // Dark blue
  neighborhood: { base: '#e85d3b', glow: '#ff7f5f' }, // Orange
  community: { base: '#8b9a3a', glow: '#a8b84d' }, // Olive green
  world: { base: '#4a90d9', glow: '#6eb5ff' },     // Blue
  ether: { base: '#2d5a87', glow: '#4a7ab0' },     // Dark blue (tip)
}

export function Cyclone({ rings, className }: CycloneProps) {
  // Sort rings by the correct order (Self at core/top, Ether at tip)
  const sortedRings = [...rings].sort((a, b) => {
    const order = ['self', 'brain', 'body', 'bubble', 'scene', 'neighborhood', 'community', 'world', 'ether']
    return order.indexOf(a.slug) - order.indexOf(b.slug)
  })

  return (
    <div className={cn('relative w-full max-w-sm mx-auto', className)}>
      {/* SVG Tornado */}
      <svg viewBox="0 0 400 500" className="w-full h-auto">
        <defs>
          {/* Glow filters for each ring */}
          {sortedRings.map((ring) => (
            <filter key={`glow-${ring.slug}`} id={`glow-${ring.slug}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          ))}
        </defs>

        {/* Tornado bands - drawn from top (widest) to bottom (tip) */}
        {sortedRings.map((ring, index) => {
          const colors = ringColors[ring.slug] || { base: '#666', glow: '#888' }
          const isLit = ring.level > 0
          const opacity = isLit ? 0.3 + (ring.level / ring.maxLevel) * 0.7 : 0.2

          // Calculate band position (tornado shape)
          const bandHeight = 45
          const startY = 40 + index * bandHeight
          const topWidth = 340 - index * 30
          const bottomWidth = 310 - index * 30
          const skew = index * 8

          // Create tornado band path
          const topLeft = 200 - topWidth / 2
          const topRight = 200 + topWidth / 2
          const bottomLeft = 200 - bottomWidth / 2 + skew
          const bottomRight = 200 + bottomWidth / 2 + skew

          // Bezier curve for the swirl effect
          const path = `
            M ${topLeft} ${startY}
            Q ${200 - topWidth / 3} ${startY + bandHeight / 2}, ${bottomLeft} ${startY + bandHeight}
            L ${bottomRight} ${startY + bandHeight}
            Q ${200 + topWidth / 3} ${startY + bandHeight / 2}, ${topRight} ${startY}
            Z
          `

          return (
            <g key={ring.id}>
              {/* Band */}
              <path
                d={path}
                fill={isLit ? colors.base : '#1a1a2e'}
                opacity={opacity}
                filter={isLit && ring.level > 50 ? `url(#glow-${ring.slug})` : undefined}
                className="transition-all duration-500"
              />
              {/* White separator line */}
              <path
                d={`M ${topLeft} ${startY} Q ${200 - topWidth / 3} ${startY + bandHeight / 2}, ${bottomLeft} ${startY + bandHeight}`}
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
            </g>
          )
        })}

        {/* Center glow effect */}
        <ellipse
          cx="200"
          cy="80"
          rx="60"
          ry="30"
          fill="url(#centerGlow)"
          opacity="0.5"
        />
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor={ringColors.self.glow} stopOpacity="0.8" />
            <stop offset="100%" stopColor={ringColors.self.base} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Ring labels */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {sortedRings.map((ring) => {
          const colors = ringColors[ring.slug]
          const isLit = ring.level > 0

          return (
            <div key={ring.id} className="text-xs">
              <div
                className={cn(
                  'font-mono uppercase tracking-wider',
                  isLit ? 'text-foreground' : 'text-muted-foreground'
                )}
                style={{ color: isLit ? colors?.glow : undefined }}
              >
                {ring.name}
              </div>
              <div className="text-muted-foreground/50">
                {ring.level}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
