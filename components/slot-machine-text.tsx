"use client"
import { useEffect, useState } from "react"

export default function SlotMachineText() {
  const thoughts = [
    "variable fonts",
    "why hot dogs come in packs of 10",
    "the perfect coffee-to-code ratio",
    "whether AI dreams of electric sheep",
    "recursive acronyms",
    "the sound of one hand clapping",
    "why we park in driveways",
    "quantum superposition of bugs",
    "the meaning of life (it's 42)",
    "why keyboards aren't in ABC order",
    "infinite loops and how to escape them",
    "the optimal pizza slice angle",
    "whether this text is being read",
    "rubber duck debugging philosophy",
    "why programmers count from 0",
    "the perfect monospace font",
    "tabs vs spaces (spaces, obviously)",
    "whether P equals NP",
    "the color of the bikeshed",
    "why bugs only appear in production",
    "the perfect commit message",
    "whether HTML is a programming language",
    "the sound of silent comments",
    "why printers hate everyone",
    "the optimal number of monitors",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % thoughts.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [thoughts.length])

  // Find the longest text for width reference
  const longestThought = thoughts.reduce((a, b) => a.length > b.length ? a : b)

  return (
    <span className="inline-block">
      <span
        key={currentIndex}
        className="whitespace-nowrap animate-fade-in bg-lime-400 text-black px-2 py-0.5"
      >
        {thoughts[currentIndex]}
      </span>
      
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            filter: blur(4px);
            transform: translateY(-12px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </span>
  )
}