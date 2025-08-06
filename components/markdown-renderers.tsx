import React from 'react'
import { Components } from 'react-markdown'
import { CheckCircle, AlertCircle, ChevronRight, Terminal, Zap, Brain, Hash } from 'lucide-react'

export const customMarkdownComponents: Partial<Components> = {
  h2: ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-16 mb-8 pb-3 border-b border-neutral-800">
      {children}
    </h2>
  ),
  h3: ({ children }) => {
    const text = String(children)
    // Check for numbered headers (1., 2., etc.)
    const numberMatch = text.match(/^(\d+)\.\s+(.+)/)
    if (numberMatch) {
      return (
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-12 mb-6 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 bg-lime-400/20 text-lime-400 rounded-full font-bold text-lg">
            {numberMatch[1]}
          </span>
          <span>{numberMatch[2]}</span>
        </h3>
      )
    }
    
    return (
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-12 mb-6 flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-lime-400 rounded-full" />
        {children}
      </h3>
    )
  },
  p: ({ children }) => {
    const text = String(children)
    // Check for special formatting patterns
    if (text.startsWith('**') && text.includes(':**')) {
      // Key-value pairs or definitions
      const parts = text.split(':**')
      if (parts.length === 2) {
        const key = parts[0].replace(/\*\*/g, '')
        const value = parts[1].replace(/\*\*/g, '')
        return (
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-neutral-300">
            <span className="font-semibold text-lime-400">{key}:</span>
            <span className="text-neutral-300">{value}</span>
          </p>
        )
      }
    }
    
    // Check for challenge/working patterns
    if (text.includes('**What\'s working:**') || text.includes('**Current challenges:**')) {
      return (
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-lime-400 font-semibold flex items-center gap-2">
          {text.includes('working') ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          {children}
        </p>
      )
    }
    
    return (
      <p className="text-lg sm:text-xl leading-relaxed mb-8 text-neutral-300 font-light">
        {children}
      </p>
    )
  },
  ul: ({ children }) => (
    <ul className="my-8 space-y-3 ml-0 list-none">
      {children}
    </ul>
  ),
  ol: ({ children }) => {
    let counter = 0
    return (
      <ol className="my-10 space-y-4 ml-0 list-none">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === 'li') {
            counter++
            return React.cloneElement(child as React.ReactElement<any>, { 'data-index': counter })
          }
          return child
        })}
      </ol>
    )
  },
  li: ({ children }) => {
    const text = String(children)
    
    // Check if it's a results item with colon
    if (text.includes(':') && (text.includes('completed') || text.includes('identified') || text.includes('elapsed'))) {
      const [label, value] = text.split(':').map(s => s.trim())
      return (
        <li className="flex items-start gap-3 text-lg text-neutral-300">
          <span className="text-lime-400 mt-1">▸</span>
          <div className="flex-1">
            <span className="text-neutral-400">{label}:</span>
            <span className="text-white font-medium ml-2">{value}</span>
          </div>
        </li>
      )
    }
    
    // Check if it starts with a bold element (agent name or key point)
    if (text.startsWith('**') && text.includes('**')) {
      const matches = text.match(/\*\*(.+?)\*\*/)
      if (matches) {
        const boldText = matches[1]
        const restText = text.replace(/\*\*(.+?)\*\*/, '')
        return (
          <li className="flex items-start gap-3 text-lg text-neutral-300 my-4">
            <ChevronRight className="text-lime-400 mt-1 h-5 w-5 flex-shrink-0" />
            <div className="flex-1">
              <span className="text-lime-400 font-semibold">{boldText}</span>
              <span className="text-neutral-300">{restText}</span>
            </div>
          </li>
        )
      }
    }
    
    return (
      <li className="flex items-start gap-3 text-lg text-neutral-300 my-3">
        <span className="text-lime-400 mt-1">▸</span>
        <span className="flex-1">{children}</span>
      </li>
    )
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-lime-400 pl-6 my-12 py-4 bg-neutral-900/30 rounded-r-lg">
      <div className="text-xl text-neutral-200 italic leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),
  code: ({ children }) => {
    const text = String(children)
    // Check for special code patterns
    if (text.includes('cache_hit_rate') || text.includes('api_cost') || text.includes('⏺') || text.includes('⎿')) {
      // Metrics or terminal output display
      return (
        <div className="bg-black border border-neutral-800 rounded-lg p-6 my-8 font-mono text-sm relative">
          <Terminal className="absolute top-3 right-3 text-neutral-600 h-4 w-4" />
          <pre className="text-lime-400">{children}</pre>
        </div>
      )
    }
    
    // Check for file paths
    if (text.includes('/') || text.includes('.md') || text.includes('.claude')) {
      return (
        <code className="text-cyan-400 bg-neutral-900/70 px-2 py-1 rounded-md text-[0.875em] font-mono">
          {children}
        </code>
      )
    }
    
    return (
      <code className="text-lime-400 bg-neutral-900/70 px-2 py-1 rounded-md text-[0.875em] font-mono">
        {children}
      </code>
    )
  },
  pre: ({ children }) => {
    const text = String(children)
    const isTerminal = text.includes('⏺') || text.includes('$') || text.includes('>')
    
    return (
      <div className="relative group my-10">
        <pre className="bg-black border border-neutral-800 rounded-lg p-6 overflow-x-auto text-sm font-mono leading-relaxed">
          {children}
        </pre>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {isTerminal && <Terminal className="text-neutral-600 h-4 w-4" />}
          <span className="text-xs text-neutral-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            {isTerminal ? 'Terminal' : 'Code'}
          </span>
        </div>
      </div>
    )
  },
  table: ({ children }) => (
    <div className="my-12 overflow-x-auto">
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b-2 border-lime-400/30 bg-neutral-900/50">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-neutral-800">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-neutral-900/30 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="text-left py-4 px-4 text-white font-semibold text-sm uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-4 px-4 text-neutral-300">
      {children}
    </td>
  ),
  strong: ({ children }) => {
    const text = String(children)
    // Check for special emphasis patterns
    if (text.includes('Before:') || text.includes('After:')) {
      return (
        <strong className="block text-lime-400 font-semibold text-lg mt-4 mb-2">
          {children}
        </strong>
      )
    }
    
    // Check for agent names or tool names
    if (text.match(/^[a-z-]+$/) && text.includes('-')) {
      return (
        <strong className="text-cyan-400 font-mono text-base bg-neutral-900/50 px-2 py-0.5 rounded">
          {children}
        </strong>
      )
    }
    
    return (
      <strong className="text-white font-semibold">
        {children}
      </strong>
    )
  },
  hr: () => (
    <div className="my-16 flex items-center justify-center">
      <div className="w-full max-w-xs border-t border-neutral-800"></div>
      <div className="mx-4">
        <Zap className="h-4 w-4 text-lime-400" />
      </div>
      <div className="w-full max-w-xs border-t border-neutral-800"></div>
    </div>
  ),
  em: ({ children }) => {
    const text = String(children)
    // Check for file names or paths
    if (text.includes('/') || text.includes('.')) {
      return (
        <em className="not-italic text-cyan-400 font-mono text-base">
          {children}
        </em>
      )
    }
    return (
      <em className="italic text-neutral-400">
        {children}
      </em>
    )
  },
}