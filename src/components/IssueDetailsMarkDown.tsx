import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Code } from './Code'

interface IssueDetailsMarkDownProps {
  children: string
}

export function IssueDetailsMarkDown({ children }: IssueDetailsMarkDownProps) {
  return (
    <ReactMarkDown
      remarkPlugins={[remarkGfm]}
      components={{
        code: Code,
        h1: 'h2',
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl mt-4 font-bold" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            className="underline text-blue text-lg"
            {...props}
          />
        ),
        img: ({ node, ...props }) => (
          <div className="py-4">
            <img alt={node.tagName} className="object-cover" {...props} />
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkDown>
  )
}
