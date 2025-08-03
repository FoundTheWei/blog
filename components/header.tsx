import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="text-base sm:text-xl font-bold tracking-tighter">
            <span className="link-underline link-underline-black">FOUNDTHEWEI</span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <nav className="space-x-2 sm:space-x-6 text-xs sm:text-sm font-medium">
              <Link href="/">
                <span className="link-underline link-underline-black">Posts</span>
              </Link>
              <Link href="/about">
                <span className="link-underline link-underline-black">About</span>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
