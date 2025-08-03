import SlotMachineText from "./slot-machine-text"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-muted-foreground inline-flex items-center justify-center flex-wrap">
          <span className="text-neutral-400 dark:text-neutral-600 mr-2">Currently thinking about...</span>
          <SlotMachineText />
        </p>
      </div>
    </footer>
  )
}
