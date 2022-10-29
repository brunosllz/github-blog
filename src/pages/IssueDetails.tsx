import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { CaretLeft } from 'phosphor-react'
import { GithubBrand } from '../assets/GithubBrand'
import { Calendar } from '../assets/Calendar'
import { Comment } from '../assets/Comment'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserProps } from './Home'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IssueProps {
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
  user: {
    login: string
  }
}

export function IssueDetails() {
  const { id } = useParams()
  const [issue, setIssue] = useState({} as IssueProps)
  const [user, setUser] = useState({} as UserProps)
  const [loading, setLoading] = useState(false)

  async function fetchIssueDetails(id: string) {
    setLoading(true)
    const response = await axios.get(
      `https://api.github.com/repos/brunosllz/github-blog/issues/${id}`,
    )
    console.log(response.data.user)
    setIssue(response.data)
    setUser(response.data.user)
    setLoading(false)
  }

  useEffect(() => {
    fetchIssueDetails(id!)
  }, [id])

  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col">
      {loading ? (
        <div>Loading</div>
      ) : (
        <header className="py-8 px-10 flex gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between mb-5">
              <Link to="/" className="flex items-center gap-2 text-blue">
                <CaretLeft size={12} weight="bold" />
                <span className="text-xs uppercase font-bold">Voltar</span>
              </Link>

              <a
                href={issue.html_url}
                className=" text-blue font-bold flex items-center gap-2 text-xs"
                rel="noreferrer"
              >
                VER NO GITHUB
                <ArrowSquareOut />
              </a>
            </div>

            <strong className="leading-[160%] text-2xl text-base-title">
              {issue.title}
            </strong>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-base-label">
                <GithubBrand />

                <span className="text-base-span">{user.login}</span>
              </div>
              <div className="flex items-center gap-2 text-base-label">
                <Calendar />
                <span className="text-base-span">Há 1 dia</span>
              </div>
              <div className="flex items-center gap-2 text-base-label">
                <Comment />
                <span className="text-base-span">
                  {issue.comments} comentários
                </span>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="py-10 px-8">
        <ReactMarkDown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkDown>
      </div>
    </main>
  )
}
