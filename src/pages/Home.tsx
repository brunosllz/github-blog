import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { BuildingSolid } from '../assets/BuildingSolid'
import { GithubBrand } from '../assets/GithubBrand'
import { UserGroup } from '../assets/UserGroup'
import { useFetchUser } from '../hooks/useUserData'
import { useFetchIssues } from '../hooks/useIssuesData'

export function Home() {
  const [searchIssue, setSearchIssue] = useState('')

  const { data: user } = useFetchUser()
  const { data: issues } = useFetchIssues()

  useEffect(() => {
    async function searchIssueFilter() {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=repo:brunosllz/github-blog%20${searchIssue}`,
      )

      console.log(response)
    }
    searchIssueFilter()
  }, [searchIssue])

  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col gap-12">
      <header className="py-8 px-10 flex gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
        <div className="flex-none rounded-lg overflow-hidden w-[148px] h-[148px] items-center justify-center ">
          <img
            src="https://avatars.githubusercontent.com/u/69438694?v=4"
            alt="bruno luiz"
            className="object-cover min-w-full min-h-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <strong className="text-2xl text-base-title">{user?.name}</strong>

            <a
              href={user?.html_url}
              target="_blank"
              className=" text-blue font-bold flex items-center gap-2"
              rel="noreferrer"
            >
              GITHUB
              <ArrowSquareOut />
            </a>
          </div>

          <p className="leading-[160%]">{user?.bio}</p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <GithubBrand />
              <span className="text-base-subtitle">{user?.login}</span>
            </div>
            <div className="flex items-center gap-2">
              <BuildingSolid />
              <span>{user?.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroup />
              <span>{user?.followers} seguidores</span>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full flex flex-col gap-3 mt-6">
        <div className="flex items-center justify-between">
          <strong className="text-lg text-base-title">Publicações</strong>
          <span className="text-sm text-base-span">
            {issues?.length! > 1
              ? `${issues?.length} publicações`
              : `${issues?.length} publicação`}
          </span>
        </div>
        <input
          placeholder="Buscar conteúdo"
          value={searchIssue}
          onChange={(e) => {
            setSearchIssue(e.target.value)
          }}
          className="w-full px-4 py-3 rounded-md bg-base-input ring-1 ring-base-border focus:ring-1 focus:ring-blue placeholder:text-base-label outline-none"
        />
      </div>

      <ul className="grid grid-cols-2 gap-8 mb-14">
        {issues?.map((issue) => {
          return (
            <Link key={issue.number} to={`issues/details/${issue.number}`}>
              <li className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors">
                <div className="flex justify-between">
                  <strong className="text-base-title text-xl max-w-[280px]">
                    {issue.title}
                  </strong>
                  <span className="block text-sm text-base-span">Há 1 dia</span>
                </div>
                <ReactMarkDown
                  remarkPlugins={[remarkGfm]}
                  className="line-clamp-4 "
                >
                  {issue.body}
                </ReactMarkDown>
              </li>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}
