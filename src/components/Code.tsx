import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'

import { ClipboardText, Copy } from 'phosphor-react'

export function Code({ children }: CodeProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="py-4 relative">
      <CopyToClipboard text={String(children)} onCopy={() => setCopied(true)}>
        <button
          title="Copiar"
          className={clsx(
            'absolute top-11 right-5 flex justify-center flex-col  items-center gap-1',
            {
              'text-blue': copied === true,
            },
          )}
        >
          {copied ? (
            <ClipboardText size={18} weight="bold" />
          ) : (
            <Copy size={18} weight="bold" />
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter style={dracula} language="js">
        {String(children)}
      </SyntaxHighlighter>
    </div>
  )
}
