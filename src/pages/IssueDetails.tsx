import { useFetchIssueDetails } from '../hooks/useIssuesData'

import { Link, useParams } from 'react-router-dom'

import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { CaretLeft } from 'phosphor-react'
import { GithubBrand } from '../assets/GithubBrand'
import { Calendar } from '../assets/Calendar'
import { Comment } from '../assets/Comment'
import { IssueDetailsMarkDown } from '../components/IssueDetailsMarkDown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function IssueDetails() {
  const { id } = useParams()

  const { data: issue } = useFetchIssueDetails(id)

  console.log(issue?.body)

  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col">
      {
        <header className="py-8 px-10 flex gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between mb-5">
              <Link to="/" className="flex items-center gap-2 text-blue">
                <CaretLeft size={12} weight="bold" />
                <span className="text-xs uppercase font-bold">Voltar</span>
              </Link>

              <a
                href={issue?.html_url}
                className=" text-blue font-bold flex items-center gap-2 text-xs"
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
                  {' '}
                  {formatDistanceToNow(new Date(issue?.created_at!), {
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
