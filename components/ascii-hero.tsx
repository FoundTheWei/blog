"use client"

import { useEffect, useState } from "react"
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react"

const ASCII_PATTERNS = [
  // Pattern 1: Wave/Flow
  {
    name: "Wave",
    lines: [
      "╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲",
      "╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱",
      "╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲",
      "╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱",
    ]
  },
  // Pattern 2: Dots to Plus
  {
    name: "Dots",
    lines: [
      "·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
      "+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
      "·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
      "+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·+·",
    ]
  },
  // Pattern 3: Abstract blocks
  {
    name: "Blocks",
    lines: [
      "▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓",
      "░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░",
      "▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓",
      "▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓▓▒░ ░▒▓",
    ]
  },
  // Pattern 4: Network/Nodes
  {
    name: "Network",
    lines: [
      "◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦",
      "│ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │",
      "◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦—◦",
      "│ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │",
    ]
  },
  // Pattern 5: Minimal lines
  {
    name: "Lines",
    lines: [
      "━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━",
      "┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃",
      "━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━",
      "┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃ ━━━ ┃┃┃",
    ]
  },
  // Pattern 6: Organic flow
  {
    name: "Flow",
    lines: [
      "∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿",
      "≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈",
      "∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿",
      "≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈",
    ]
  },
  // Pattern 7: Typography-inspired
  {
    name: "Boxes",
    lines: [
      "╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗",
      "║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ║",
      "╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝",
      "                                                      ",
    ]
  },
  // Pattern 8: Scatter
  {
    name: "Scatter",
    lines: [
      "× · × · × · × · × · × · × · × · × · × · × · × · × · × · ",
      "· × · × · × · × · × · × · × · × · × · × · × · × · × · × ",
      "× · × · × · × · × · × · × · × · × · × · × · × · × · × · ",
      "· × · × · × · × · × · × · × · × · × · × · × · × · × · × ",
    ]
  },
  // Pattern 9: Diamond lattice
  {
    name: "Diamond",
    lines: [
      "◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊",
      " ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ",
      "◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊",
      " ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ◊ ",
    ]
  },
  // Pattern 10: Arrows
  {
    name: "Arrows",
    lines: [
      "→ ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ←",
      "↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓",
      "← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← → ← →",
      "↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑",
    ]
  },
]

// Transition characters for morphing effect
const MORPH_CHARS = ["·", ":", "∴", "∵", "∴", ":", "·", " "]

export default function ASCIIHero() {
  const [currentPattern, setCurrentPattern] = useState(0)
  const [displayPattern, setDisplayPattern] = useState(ASCII_PATTERNS[0].lines)
  const [isMorphing, setIsMorphing] = useState(false)
  const [morphStep, setMorphStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showControls, setShowControls] = useState(false)

  // Manual pattern navigation
  const goToPattern = (index: number) => {
    if (!isMorphing) {
      setCurrentPattern(index)
      setDisplayPattern(ASCII_PATTERNS[index].lines)
    }
  }

  const nextPattern = () => {
    const next = (currentPattern + 1) % ASCII_PATTERNS.length
    goToPattern(next)
  }

  const prevPattern = () => {
    const prev = currentPattern === 0 ? ASCII_PATTERNS.length - 1 : currentPattern - 1
    goToPattern(prev)
  }

  // Smooth morphing between patterns
  const morphToNext = () => {
    if (!isPlaying) return
    
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
    }, 80)
  }

  // Update display during morph
  useEffect(() => {
    if (isMorphing && isPlaying) {
      const targetPattern = ASCII_PATTERNS[(currentPattern + 1) % ASCII_PATTERNS.length]
      const morphChar = MORPH_CHARS[morphStep]
      
      setDisplayPattern(current =>
        current.map((line, i) => {
          const targetLine = targetPattern.lines[i] || ""
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
    } else if (!isMorphing) {
      setDisplayPattern(ASCII_PATTERNS[currentPattern].lines)
    }
  }, [currentPattern, isMorphing, morphStep, isPlaying])

  // Auto-rotate patterns
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      if (!isMorphing) {
        morphToNext()
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [isMorphing, isPlaying])

  return (
    <div 
      className="w-full py-8 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* ASCII Art Display */}
      <div 
        className="font-mono text-sm sm:text-base md:text-lg select-none leading-relaxed text-center overflow-hidden"
        aria-hidden="true"
      >
        {displayPattern.map((line, i) => (
          <div 
            key={i} 
            className="whitespace-pre text-neutral-200 hover:text-lime-400 transition-all duration-300"
            style={{
              animation: isPlaying ? `gentle-float ${4 + (i * 0.5)}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.15}s`,
              letterSpacing: '0.05em'
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Minimalist Controls */}
      <div 
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 transition-all duration-300 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {/* Pattern dots indicator */}
        <div className="flex items-center gap-3 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-full border border-neutral-800">
          <button
            onClick={prevPattern}
            className="p-1 hover:text-lime-500 transition-colors"
            aria-label="Previous pattern"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {ASCII_PATTERNS.map((pattern, index) => (
              <button
                key={index}
                onClick={() => goToPattern(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentPattern 
                    ? 'bg-lime-500 w-3' 
                    : 'bg-neutral-400 hover:bg-neutral-300'
                }`}
                aria-label={`Go to ${pattern.name} pattern`}
                title={pattern.name}
              />
            ))}
          </div>

          <button
            onClick={nextPattern}
            className="p-1 hover:text-lime-500 transition-colors"
            aria-label="Next pattern"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-neutral-700" />
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 hover:text-lime-500 transition-colors"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.9;
          }
          25% {
            opacity: 0.95;
          }
          50% {
            transform: translateY(-3px) scale(1.01);
            opacity: 1;
          }
          75% {
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  )
}