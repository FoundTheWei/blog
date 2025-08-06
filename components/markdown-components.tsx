import React from 'react'
import { cn } from '@/lib/utils'

export const components = {
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-neutral-900 dark:text-white" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: any) => {
    // Check if this is the first paragraph (first letter styling)
    const isFirstParagraph = props.className?.includes('first-paragraph')
    
    if (isFirstParagraph) {
      return (
        <p className="text-lg leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300 first-letter:text-6xl first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-white first-letter:mr-2 first-letter:float-left first-letter:leading-none" {...props}>
          {children}
        </p>
      )
    }
    
    return (
      <p className="text-base sm:text-lg leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300" {...props}>
        {children}
      </p>
    )
  },
  ul: ({ children, ...props }: any) => (
    <ul className="space-y-2 mb-6 ml-6 list-disc marker:text-lime-500" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="space-y-2 mb-6 ml-6 list-decimal marker:text-lime-500" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="my-8 pl-6 border-l-4 border-lime-500 bg-neutral-50 dark:bg-neutral-900/50 py-4 pr-6 rounded-r" {...props}>
      <div className="text-lg sm:text-xl font-medium italic text-neutral-800 dark:text-neutral-200">
        {children}
      </div>
    </blockquote>
  ),
  code: ({ className, children, ...props }: any) => {
    const isInline = !className
    
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 mx-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      )
    }
    
    return (
      <code className={cn(className, "font-mono")} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }: any) => (
    <pre className="my-6 bg-neutral-900 dark:bg-neutral-950 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm sm:text-base font-mono border border-neutral-800" {...props}>
      {children}
    </pre>
  ),
  table: ({ children, ...props }: any) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm sm:text-base border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-neutral-100 dark:bg-neutral-800" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: any) => (
    <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: any) => (
    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors" {...props}>
      {children}
    </tr>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-bold text-neutral-900 dark:text-white" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  hr: (props: any) => (
    <hr className="my-12 border-t border-neutral-200 dark:border-neutral-800" {...props} />
  ),
  a: ({ children, href, ...props }: any) => (
    <a 
      href={href}
      className="text-lime-600 dark:text-lime-400 underline underline-offset-2 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
}