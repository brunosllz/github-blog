import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface IssueCardProps {
  data: IssueProps
}

export function IssueCard({ data }: IssueCardProps) {
  return (
    <li>
      <Link
        to={`issues/details/${data.number}`}
        className="flex flex-col p-8 gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors"
      >
        <div className="flex justify-between">
          <strong className="text-base-title text-xl max-w-[280px]">
            {data.title}
          </strong>
          <span className="block text-sm text-base-span">
            {formatDistanceToNow(new Date(data.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <ReactMarkDown remarkPlugins={[remarkGfm]} className="line-clamp-4 ">
          {data.body}
        </ReactMarkDown>
      </Link>
    </li>
  )
}
