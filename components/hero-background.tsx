"use client"
import { useEffect, useRef } from "react"
import "../app/hero-animations.css"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Reduced particles for better performance
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(163, 230, 53, ${particle.opacity})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="blob-1 absolute top-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-lime-400/20 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="blob-2 absolute top-1/3 -right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-lime-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="blob-3 absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-lime-300/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
      </div>

      {/* Aurora wave effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="aurora absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-lime-500/10" />
      </div>

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none mix-blend-screen"
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric shapes - simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape-1 absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border border-lime-400/20 rotate-45" />
        <div className="shape-2 absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 border border-lime-500/20 rounded-full" />
        <div className="shape-3 absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-lime-300/20" />
      </div>
    </>
  )
}