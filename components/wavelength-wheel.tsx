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
      angle = Math.max(10, Math.min(170, angle))

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
      { offset: -22, width: 10, points: 2, color: "#60a5fa" },
      { offset: -12, width: 10, points: 3, color: "#fb923c" },
      { offset: -4, width: 8, points: 4, color: "#f87171" },
      { offset: 4, width: 10, points: 3, color: "#fb923c" },
      { offset: 14, width: 10, points: 2, color: "#60a5fa" },
    ]

    return zones.map((zone, index) => {
      const startAngle = Math.max(0, targetPosition + zone.offset)
      const endAngle = Math.min(180, startAngle + zone.width)
      const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180)
      const textRadius = 130
      const textX = 200 + textRadius * Math.cos(Math.PI - midAngle)
      const textY = 200 - textRadius * Math.sin(Math.PI - midAngle)

      return (
        <g key={index}>
          <path d={createArc(startAngle, endAngle, 45, 175)} fill={zone.color} />
          <text
            x={textX}
            y={textY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontWeight="700"
            fontSize="18"
            className="select-none pointer-events-none"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            {zone.points}
          </text>
        </g>
      )
    })
  }

  const renderNeedle = (angle: number, isTarget = false) => {
    const rad = (angle * Math.PI) / 180
    const length = 160
    const endX = 200 + length * Math.cos(Math.PI - rad)
    const endY = 200 - length * Math.sin(Math.PI - rad)

    return (
      <g className={cn(!isDragging && "transition-transform duration-150")}>
        <line
          x1="200"
          y1="200"
          x2={endX}
          y2={endY}
          stroke={isTarget ? "#dc2626" : "#8b5cf6"}
          strokeWidth={isTarget ? 8 : 6}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        />
        <circle
          cx={endX}
          cy={endY}
          r={isTarget ? 10 : 8}
          fill={isTarget ? "#dc2626" : "#8b5cf6"}
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
        />
      </g>
    )
  }

  return (
    <div className="w-full max-w-sm mx-auto" ref={containerRef}>
      <svg
        viewBox="0 0 400 230"
        className={cn("w-full h-auto touch-none select-none", interactive && "cursor-pointer")}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Fond de la roue - blanc cassé */}
        <path d={createArc(0, 180, 0, 180)} fill="#f8f6f1" />

        {/* Bordure extérieure épaisse - bleu marine */}
        <path
          d={createArc(0, 180, 175, 190)}
          fill="#1e3a5f"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }}
        />

        {/* Zones de score */}
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
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#cbd5e1" strokeWidth="1" />
        })}

        {/* Aiguille cible */}
        {showTarget && renderNeedle(targetPosition, true)}

        {/* Aiguille joueur */}
        {interactive && renderNeedle(currentGuess, false)}

        {/* Bouton central */}
        <circle cx="200" cy="200" r="40" fill="#dc2626" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }} />
        <circle cx="200" cy="200" r="32" fill="#ef4444" />
        <ellipse cx="192" cy="190" rx="14" ry="10" fill="rgba(255,255,255,0.25)" />
      </svg>

      {/* Labels des extrêmes */}
      <div className="flex justify-between items-start mt-3 px-1">
        <div className="max-w-[45%]">
          <span className="inline-block px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium leading-tight">
            {leftExtreme}
          </span>
        </div>
        <div className="max-w-[45%] text-right">
          <span className="inline-block px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium leading-tight">
            {rightExtreme}
          </span>
        </div>
      </div>
    </div>
  )
}
