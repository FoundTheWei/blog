"use client"

import { useEffect, useState } from "react"

const ASCII_PATTERNS = [
  // Pattern 1: Wave/Flow
  [
    "╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲",
    "╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱",
    "╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲",
    "╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱",
  ],
  // Pattern 2: Dots to Plus
  [
    "·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
    "+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
    "·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
    "+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
  ],
  // Pattern 3: Abstract blocks
  [
    "▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓",
    "░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░",
    "▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓",
    "▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓",
  ],
  // Pattern 4: Network/Nodes
  [
    "◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦",
    "│ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │",
    "◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦",
    "│ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │",
  ],
  // Pattern 5: Minimal lines
  [
    "━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━",
    "┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃",
    "━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━",
    "┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃",
  ],
  // Pattern 6: Organic flow
  [
    "∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿",
    "≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈",
    "∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿",
    "≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈",
  ],
  // Pattern 7: Typography-inspired
  [
    "╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗",
    "║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║",
    "╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝",
    "                                                      ",
  ],
  // Pattern 8: Scatter
  [
    "× · × · × · × · × · × · × · × · × · × · × · × · × · × · ",
    "· × · × · × · × · × · × · × · × · × · × · × · × · × · × ",
    "× · × · × · × · × · × · × · × · × · × · × · × · × · × · ",
    "· × · × · × · × · × · × · × · × · × · × · × · × · × · × ",
  ],
  // Pattern 9: Diamond lattice
  [
    "◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊",
    " ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ",
    "◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊",
    " ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ",
  ],
  // Pattern 10: Arrows
  [
    "→ ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ←",
    "↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓",
    "← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← →",
    "↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑",
  ],
]

// Transition characters for morphing effect
const MORPH_CHARS = ["·", ":", "∴", "∵", "∴", ":", "·", " "]

export default function ASCIIHero() {
  const [currentPattern, setCurrentPattern] = useState(0)
  const [displayPattern, setDisplayPattern] = useState(ASCII_PATTERNS[0])
  const [isMorphing, setIsMorphing] = useState(false)
  const [morphStep, setMorphStep] = useState(0)

  // Smooth morphing between patterns
  const morphToNext = () => {
    setIsMorphing(true)
    setMorphStep(0)
    
    const morphInterval = setInterval(() => {
      setMorphStep(prev => {
        if (prev >= MORPH_CHARS.length - 1) {
          clearInterval(morphInterval)
          setIsMorphing(false)
          setCurrentPattern(prev => (prev + 1) % ASCII_PATTERNS.length)
          return 0
        }
        return prev + 1
      })
    }, 80) // Faster morphing for smoother effect
  }

  // Update display during morph
  useEffect(() => {
    if (isMorphing) {
      const targetPattern = ASCII_PATTERNS[(currentPattern + 1) % ASCII_PATTERNS.length]
      const morphChar = MORPH_CHARS[morphStep]
      
      setDisplayPattern(current =>
        current.map((line, i) => {
          const targetLine = targetPattern[i] || ""
          return line.split('').map((char, j) => {
            // Create a wave effect across the pattern
            const wavePosition = (morphStep / MORPH_CHARS.length) * line.length
            const distance = Math.abs(j - wavePosition)
            
            if (distance < 8) { // Wave width
              return morphChar
            }
            
            if (morphStep > MORPH_CHARS.length / 2) {
              return targetLine[j] || ' '
            }
            
            return char
          }).join('')
        })
      )
    } else {
      setDisplayPattern(ASCII_PATTERNS[currentPattern])
    }
  }, [currentPattern, isMorphing, morphStep])

  // Auto-rotate patterns
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMorphing) {
        morphToNext()
      }
    }, 3500) // Change every 3.5 seconds

    return () => clearInterval(interval)
  }, [isMorphing])

  return (
    <div className="w-full py-8">
      {/* ASCII Art Display */}
      <div 
        className="font-mono text-sm sm:text-base md:text-lg select-none leading-relaxed text-center overflow-hidden"
        aria-hidden="true"
      >
        {displayPattern.map((line, i) => (
          <div 
            key={i} 
            className="whitespace-pre text-neutral-800 dark:text-neutral-200 hover:text-lime-600 dark:hover:text-lime-400 transition-all duration-300"
            style={{
              animation: `gentle-float ${4 + (i * 0.5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              letterSpacing: '0.05em'
            }}
          >
            {line}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          25% {
            opacity: 0.85;
          }
          50% {
            transform: translateY(-3px) scale(1.01);
            opacity: 1;
          }
          75% {
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  )
}