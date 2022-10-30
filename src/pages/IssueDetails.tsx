import { useFetchIssueDetails } from '../hooks/useIssuesData'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

import { IssueDetailsMarkDown } from '../components/IssueDetailsMarkDown'

import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { GithubBrand } from '../assets/GithubBrand'
import { Calendar } from '../assets/Calendar'
import { Comment } from '../assets/Comment'
import { CaretLeft } from 'phosphor-react'

export function IssueDetails() {
  const { id } = useParams()

  const { data: issue, isLoading } = useFetchIssueDetails(id)

  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col">
      {
        <header className="py-8 px-10 flex gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between mb-5">
              <Link
                to="/"
                className="flex items-center gap-2 py-1 text-blue border-b border-transparent transition-colors hover:border-b hover:border-blue"
              >
                <CaretLeft size={12} weight="bold" />
                <span className="text-xs uppercase font-bold">Voltar</span>
              </Link>

              <a
                href={issue?.html_url}
                target="_blank"
                className=" text-blue font-bold flex items-center gap-2 py-1 text-xs border-b border-transparent transition-colors hover:border-b hover:border-blue"
                rel="noreferrer"
              >
                VER NO GITHUB
                <ArrowSquareOut />
              </a>
            </div>

            <strong className="leading-[160%] text-2xl text-base-title">
              {issue?.title}
            </strong>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-base-label">
                <GithubBrand />

                <span className="text-base-span">{issue?.user.login}</span>
              </div>
              <div className="flex items-center gap-2 text-base-label">
                <Calendar />
                <span className="text-base-span">
                  {!isLoading &&
                    formatDistanceToNow(new Date(issue?.created_at!), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-base-label">
                <Comment />
                <span className="text-base-span">
                  {issue?.comments} comentários
                </span>
              </div>
            </div>
          </div>
        </header>
      }

      <div className="py-10 px-8">
        <IssueDetailsMarkDown>{issue?.body!}</IssueDetailsMarkDown>
      </div>
    </main>
  )
}
