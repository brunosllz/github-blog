import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeProps } from 'react-markdown/lib/ast-to-react'

export function Code({ children }: CodeProps) {
  return (
    <div className="py-4">
      <SyntaxHighlighter style={dracula} language="js">
        {String(children)}
      </SyntaxHighlighter>
    </div>
  )
}
