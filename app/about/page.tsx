"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Shimmering lake ASCII patterns - artistic and varied
const ASCII_PATTERNS = [
  // Calm lake surface with subtle variations
  [
    "   ～  ≈  ∿  ～    ≈   ∿    ～  ≈    ∿   ～  ≈   ∿  ～   ≈  ",
    " ∿   ～  ≈   ∿  ～   ≈  ∿   ～   ≈  ∿  ～   ≈   ∿   ～  ≈  ∿",
    "  ≈  ∿   ～  ≈   ∿  ～   ≈  ∿  ～   ≈   ∿  ～  ≈   ∿   ～  ≈ ",
    "～   ≈  ∿   ～  ≈   ∿   ～  ≈  ∿   ～   ≈  ∿   ～  ≈   ∿  ～ ",
    " ∿  ～   ≈  ∿   ～  ≈  ∿   ～  ≈   ∿  ～   ≈  ∿   ～   ≈  ∿  ",
    "  ≈   ∿  ～   ≈  ∿   ～  ≈   ∿  ～  ≈   ∿   ～  ≈  ∿   ～  ≈ ",
  ],
  // Gentle ripples spreading outward
  [
    "        ·  ∴  ·        ∵      ·   ∴        ·      ∵       ",
    "     ∴     ○     ∵        ○      ∴     ○        ∴     ○   ",
    "   ·    ∵     ·     ∴  ·     ∵     ·     ∴   ·     ∵     ",
    "  ○        ○       ○      ○       ○       ○      ○       ○",
    "     ∵  ·     ∴        ∵     ·  ∴      ∵     ·      ∴    ",
    "        ∴        ·  ∵        ∴       ·  ∵       ∴     ·   ",
  ],
  // Light dancing on water
  [
    "  ✦      ·   ✧      ∴   ✦       ·  ✧       ∴  ✦      ·   ",
    "     ∵      ✦    ·      ✧   ∵      ✦    ·     ✧   ∵      ",
    "  ·     ✧      ∴    ✦      ·    ✧     ∴    ✦     ·    ✧  ",
    "    ✦      ∵      ·   ✦      ∵     ·    ✦     ∵      ·   ",
    "  ∴     ·    ✧      ∴    ·     ✧     ∴     ·    ✧     ∴  ",
    "     ✧      ✦   ∵      ✧     ✦    ∵     ✧      ✦   ∵     ",
  ],
  // Flowing current patterns
  [
    "  ～～∿∿～～    ～～∿∿～～    ～～∿∿～～    ～～∿∿～～    ～～∿∿～～  ",
    "    ∿∿～～∿∿      ∿∿～～∿∿      ∿∿～～∿∿      ∿∿～～∿∿      ",
    "  ～～  ∿∿  ～～  ～～  ∿∿  ～～  ～～  ∿∿  ～～  ～～  ∿∿  ～～  ",
    "    ∿∿～～∿∿      ∿∿～～∿∿      ∿∿～～∿∿      ∿∿～～∿∿      ",
    "  ～～∿∿～～    ～～∿∿～～    ～～∿∿～～    ～～∿∿～～    ～～∿∿～～  ",
    "      ～～∿∿        ～～∿∿        ～～∿∿        ～～∿∿        ",
  ],
  // Deep water with reflections
  [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "  ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈",
    "    ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿    ",
    "  ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈    ≈≈≈",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "   ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿      ∿∿∿     ",
  ],
]

// Transition characters for morphing effect - water-like
const MORPH_CHARS = ["·", "∴", "∵", ":", "～", "∿", "≈", "～", "∿", "∵", "∴", "·", " "]

export default function AboutPage() {
  const [currentPattern, setCurrentPattern] = useState(0)
  const [displayPattern, setDisplayPattern] = useState(ASCII_PATTERNS[0])
  const [isMorphing, setIsMorphing] = useState(false)
  const [morphStep, setMorphStep] = useState(0)

  // Smooth morphing between patterns with ripple effect
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
    }, 80) // Smooth water-like morphing speed
  }

  // Update display during morph - create water ripple effect
  useEffect(() => {
    if (isMorphing) {
      const targetPattern = ASCII_PATTERNS[(currentPattern + 1) % ASCII_PATTERNS.length]
      const morphChar = MORPH_CHARS[morphStep]
      
      setDisplayPattern(current =>
        current.map((line, i) => {
          const targetLine = targetPattern[i]
          return line.split('').map((char, j) => {
            // Create multiple ripple points for a more natural water effect
            const time = morphStep / MORPH_CHARS.length
            
            // Primary ripple from left side
            const ripple1 = Math.sin((j * 0.15) - (time * Math.PI * 4)) * 0.5 + 0.5
            
            // Secondary ripple from right side
            const ripple2 = Math.sin((j * 0.1) + (time * Math.PI * 3)) * 0.5 + 0.5
            
            // Vertical wave component
            const verticalWave = Math.sin((i * 0.5) + (time * Math.PI * 2)) * 0.3
            
            // Combine ripples for interference pattern
            const combinedRipple = (ripple1 + ripple2 + verticalWave) / 2
            
            // Determine if this position should morph based on ripple intensity
            const threshold = 0.3 + (time * 0.4)
            
            if (combinedRipple > threshold && combinedRipple < threshold + 0.2) {
              // Use different morph chars based on position for variety
              const morphIndex = Math.floor((combinedRipple * 10) % MORPH_CHARS.length)
              return MORPH_CHARS[morphIndex]
            }
            
            // Gradually transition to target pattern
            if (time > 0.6) {
              const transitionChance = (time - 0.6) * 2.5
              if (Math.random() < transitionChance) {
                return targetLine[j] || ' '
              }
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
    }, 3500) // Change every 3.5 seconds for peaceful lake effect

    return () => clearInterval(interval)
  }, [isMorphing])

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Shimmering Lake ASCII Animation */}
        <div className="flex justify-center mb-12 overflow-hidden">
          <div className="font-mono text-xs sm:text-sm select-none">
            <div className="text-center">
              {displayPattern.map((line, i) => (
                <div 
                  key={i} 
                  className="whitespace-pre text-lime-500"
                  style={{
                    animation: `shimmer ${4 + (i * 0.3)}s ease-in-out infinite, wave ${6}s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                    letterSpacing: '0.05em',
                    opacity: 0.8 + (Math.sin(i) * 0.2)
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-4">
              Killing busywork with AI.
            </h1>
            <p className="text-xl text-muted-foreground">
              Documenting what works.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              I document AI workflows that actually work. Model comparisons, system building, 
              automation patterns. No theory, just what ships.
            </p>
            
            <p className="text-lg leading-relaxed">
              Every post is an experiment. Every commit is tracked. This entire blog is built 
              with Claude Code because that's the point—using AI to document using AI.
            </p>
            
            <p className="text-lg leading-relaxed">
              CRO strategist by day. Workflow automator by necessity. If it kills a meeting or 
              speeds a decision, it goes here.
            </p>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <div className="flex justify-center gap-4">
              <Link 
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 transition-all hover:scale-105"
              >
                Read the posts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/commits"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-lime-500 text-lime-500 font-bold rounded-lg hover:bg-lime-500 hover:text-black transition-all hover:scale-105"
              >
                See the commits
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.6;
            filter: brightness(0.9) blur(0px);
            transform: translateX(0);
          }
          25% {
            opacity: 0.8;
            filter: brightness(1.1) blur(0.5px);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3) blur(0px);
            transform: translateX(2px);
          }
          75% {
            opacity: 0.8;
            filter: brightness(1.1) blur(0.5px);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateY(0) scaleY(1);
          }
          25% {
            transform: translateY(-2px) scaleY(0.98);
          }
          50% {
            transform: translateY(1px) scaleY(1.02);
          }
          75% {
            transform: translateY(-1px) scaleY(0.99);
          }
        }
      `}</style>
    </main>
  )
}