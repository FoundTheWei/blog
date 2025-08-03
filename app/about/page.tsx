import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-96 md:h-[60vh]">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="AI generated portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tighter">About Me</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a designer and developer with a passion for creating clean, intuitive, and beautiful digital
            experiences. My work sits at the intersection of art and technology, where I explore how AI can enhance
            creativity without sacrificing the human touch.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This blog is a space for me to document my thoughts, experiments, and the details that I find fascinating.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-foreground hover:text-lime-500 dark:hover:text-lime-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-foreground hover:text-lime-500 dark:hover:text-lime-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-foreground hover:text-lime-500 dark:hover:text-lime-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
