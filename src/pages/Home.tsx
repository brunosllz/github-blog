import axios from 'axios'
import { useEffect, useState } from 'react'
import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { BuildingSolid } from '../assets/BuildingSolid'
import { GithubBrand } from '../assets/GithubBrand'
import { UserGroup } from '../assets/UserGroup'

interface UserProps {
  login: string
  id: number
  html_url: string
  avatar_url: string
  name: string
  company: string
  location: string
  bio: string
  public_repos: 15
  followers: 14
  following: 9
}

interface IssuesProps {
  number: number
  title: string
  body: string
  created_at: Date
}

export function Home() {
  const [user, setUser] = useState({} as UserProps)
  const [issues, setIssues] = useState<IssuesProps[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchUser() {
    const response = await axios.get('https://api.github.com/users/brunosllz')

    setUser(response.data)
  }

  async function fetchIssues() {
    setLoading(true)
    const response = await axios.get(
      'https://api.github.com/search/issues?q=repo:brunosllz/github-blog',
    )

    setLoading(false)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

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
            <strong className="text-2xl text-base-title">{user.name}</strong>

            <a
              href={user.html_url}
              target="_blank"
              className=" text-blue font-bold flex items-center gap-2"
              rel="noreferrer"
            >
              GITHUB
              <ArrowSquareOut />
            </a>
          </div>

          <p className="leading-[160%]">{user.bio}</p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <GithubBrand />
              <span className="text-base-subtitle">{user.login}</span>
            </div>
            <div className="flex items-center gap-2">
              <BuildingSolid />
              <span>{user.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroup />
              <span>{user.followers} seguidores</span>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full flex flex-col gap-3 mt-6">
        <div className="flex items-center justify-between">
          <strong className="text-lg text-base-title">Publicações</strong>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <input
          placeholder="Buscar conteúdo"
          className="w-full px-4 py-3 rounded-md bg-base-input ring-1 ring-base-border focus:ring-1 focus:ring-blue placeholder:text-base-label outline-none"
        />
      </div>

      <ul className="grid grid-cols-2 gap-8 mb-14">
        {!loading ? (
          issues.map((issue) => {
            return (
              <li
                key={issue.number}
                className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors"
              >
                <div className="flex justify-between">
                  <strong className="text-base-title text-xl max-w-[280px]">
                    {issue.title}
                  </strong>
                  <span className="block text-sm text-base-span">Há 1 dia</span>
                </div>
                <p className="line-clamp-4 ">{issue.body}</p>
              </li>
            )
          })
        ) : (
          <div>loading</div>
        )}
      </ul>
    </main>
  )
}
