"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface WavelengthWheelProps {
  targetPosition?: number
  showTarget?: boolean
  guessPosition?: number
  onGuessChange?: (position: number) => void
  interactive?: boolean
  leftExtreme: string
  rightExtreme: string
  showZones?: boolean
}

export function WavelengthWheel({
  targetPosition = 90,
  showTarget = false,
  guessPosition,
  onGuessChange,
  interactive = false,
  leftExtreme,
  rightExtreme,
  showZones = false,
}: WavelengthWheelProps) {
  const [currentGuess, setCurrentGuess] = useState(guessPosition ?? 90)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (guessPosition !== undefined) {
      setCurrentGuess(guessPosition)
    }
  }, [guessPosition])

  const handleInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!interactive || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height - 20

      const dx = clientX - centerX
      const dy = centerY - clientY

      let angle = Math.atan2(dy, dx) * (180 / Math.PI)
      // Correction logic for needle direction
      angle = 180 - angle
      angle = Math.max(0, Math.min(180, angle))

      setCurrentGuess(angle)
      onGuessChange?.(angle)
    },
    [interactive, onGuessChange],
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive) return
    e.preventDefault()
    setIsDragging(true)
    handleInteraction(e.clientX, e.clientY)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      handleInteraction(e.clientX, e.clientY)
    },
    [isDragging, handleInteraction],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!interactive) return
    setIsDragging(true)
    const touch = e.touches[0]
    handleInteraction(touch.clientX, touch.clientY)
  }

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const touch = e.touches[0]
      handleInteraction(touch.clientX, touch.clientY)
    },
    [isDragging, handleInteraction],
  )

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
      window.addEventListener("touchend", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  const createArc = (startAngle: number, endAngle: number, innerR: number, outerR: number) => {
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180
    const cx = 200
    const cy = 200

    const x1 = cx + outerR * Math.cos(Math.PI - startRad)
    const y1 = cy - outerR * Math.sin(Math.PI - startRad)
    const x2 = cx + outerR * Math.cos(Math.PI - endRad)
    const y2 = cy - outerR * Math.sin(Math.PI - endRad)
    const x3 = cx + innerR * Math.cos(Math.PI - endRad)
    const y3 = cy - innerR * Math.sin(Math.PI - endRad)
    const x4 = cx + innerR * Math.cos(Math.PI - startRad)
    const y4 = cy - innerR * Math.sin(Math.PI - startRad)

    const largeArc = endAngle - startAngle > 180 ? 1 : 0

    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`
  }

  const renderScoringZones = () => {
    if (!showZones) return null

    const zones = [
      { offset: -22, width: 10, points: 2, color: "#3b82f6" },  // Blue (2 pts)
      { offset: -12, width: 8, points: 3, color: "#f97316" },   // Orange (3 pts)
      { offset: -4, width: 8, points: 4, color: "#ef4444" },    // Red (Center - 4 pts)
      { offset: 4, width: 8, points: 3, color: "#f97316" },     // Orange (3 pts)
      { offset: 12, width: 10, points: 2, color: "#3b82f6" },   // Blue (2 pts)
    ]

    return zones.map((zone, index) => {
      const startAngle = Math.max(0, targetPosition + zone.offset)
      const endAngle = Math.min(180, startAngle + zone.width)
      if (endAngle <= startAngle) return null

      const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180)
      const textRadius = 130
      const textX = 200 + textRadius * Math.cos(Math.PI - midAngle)
      const textY = 200 - textRadius * Math.sin(Math.PI - midAngle)

      return (
        <g key={index}>
          <path
            d={createArc(startAngle, endAngle, 45, 175)}
            fill={zone.color}
            opacity={0.9}
          />
          <text
            x={textX}
            y={textY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontWeight="600"
            fontSize="16"
            className="select-none pointer-events-none"
          >
            {zone.points}
          </text>
        </g>
      )
    })
  }

  const renderNeedle = (angle: number, isTarget = false) => {
    const rad = (angle * Math.PI) / 180
    const length = 155
    const endX = 200 + length * Math.cos(Math.PI - rad)
    const endY = 200 - length * Math.sin(Math.PI - rad)

    // FORCE RED for player needle. Target needle is blue (but hidden mostly).
    const needleColor = isTarget ? "#3b82f6" : "#ef4444"

    return (
      <g className={cn(!isDragging && "transition-transform duration-500 ease-out")}>
        {/* Shadow */}
        <line
          x1="200"
          y1="205"
          x2={endX}
          y2={endY + 5}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={isTarget ? 4 : 5}
          strokeLinecap="round"
        />
        {/* Main needle */}
        <line
          x1="200"
          y1="200"
          x2={endX}
          y2={endY}
          stroke={needleColor}
          strokeWidth={isTarget ? 4 : 5}
          strokeLinecap="round"
        />
        {/* Center pivot */}
        <circle
          cx="200"
          cy="200"
          r={isTarget ? 4 : 6}
          fill={needleColor}
        />
      </g>
    )
  }

  return (
    <div className="w-full mx-auto" ref={containerRef}>
      <svg
        viewBox="0 0 400 230"
        className={cn("w-full h-auto touch-none select-none", interactive && "cursor-pointer")}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Background of the wheel */}
        <path d={createArc(0, 180, 0, 180)} fill="#f1f5f9" />

        {/* Outer border */}
        <path
          d={createArc(0, 180, 175, 185)}
          fill="#e2e8f0"
        />

        {/* Inner ring */}
        <path
          d={createArc(0, 180, 40, 45)}
          fill="#e2e8f0"
        />

        {/* Scoring zones/Target */}
        {renderScoringZones()}

        {/* Graduations */}
        {[...Array(19)].map((_, i) => {
          const angle = i * 10
          const rad = (angle * Math.PI) / 180
          const inner = 170
          const outer = 175
          const x1 = 200 + inner * Math.cos(Math.PI - rad)
          const y1 = 200 - inner * Math.sin(Math.PI - rad)
          const x2 = 200 + outer * Math.cos(Math.PI - rad)
          const y2 = 200 - outer * Math.sin(Math.PI - rad)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#94a3b8"
              strokeWidth="1"
            />
          )
        })}

        {/* Target needle (Blue) - ONLY show if zones are NOT shown. 
            If zones are shown (reveal/guessing), the zones ARE the target markers.
            Double needle is confusing.
        */}
        {showTarget && !showZones && renderNeedle(targetPosition, true)}

        {/* Player needle (Red) - Always visible if interactive or if playing/revealing */}
        {(interactive || guessPosition !== undefined) && renderNeedle(currentGuess, false)}

        {/* Central button */}
        <circle
          cx="200"
          cy="200"
          r="25"
          fill="#e2e8f0"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="200"
          r="12"
          fill="#ef4444"
          className="shadow-sm"
        />
      </svg>

      {/* Labels - Cleaner layout: smaller text, more margin top, no overlapping */}
      <div className="flex justify-between items-start mt-2 px-2 gap-4">
        <div className="flex-1 text-left">
          <span className="inline-block px-3 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-medium shadow-sm leading-tight break-words max-w-full">
            {leftExtreme}
          </span>
        </div>
        <div className="flex-1 text-right">
          <span className="inline-block px-3 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-medium shadow-sm leading-tight break-words max-w-full">
            {rightExtreme}
          </span>
        </div>
      </div>
    </div>
  )
}
