import { useState } from 'react'
import { useFetchIssues } from '../hooks/useIssuesData'
import { useFetchUser } from '../hooks/useUserData'

import { IssueCard } from '../components/IssueCard'

import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { BuildingSolid } from '../assets/BuildingSolid'
import { GithubBrand } from '../assets/GithubBrand'
import { UserGroup } from '../assets/UserGroup'
import { IssueCardSkeleton } from '../components/IssueCardSkeleton'
import { WarningCircle } from 'phosphor-react'

export function Home() {
  const [searchIssue, setSearchIssue] = useState('')

  const { data: user } = useFetchUser()
  const { issues, isLoading } = useFetchIssues(searchIssue)

  const hasIssues = issues?.length! > 0

  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col gap-12">
      <header className="py-8 px-10 flex items-center gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
        <div className="flex-none rounded-lg overflow-hidden w-[148px] h-[148px] items-center justify-center ">
          <img
            src="https://avatars.githubusercontent.com/u/69438694?v=4"
            alt="bruno luiz"
            className="object-cover min-w-full min-h-full"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between ">
            <strong className="text-2xl text-base-title">{user?.name}</strong>

            <a
              href={user?.html_url!}
              target="_blank"
              className=" text-blue font-bold flex items-center gap-2 text-xs py-1 border-b border-transparent transition-colors hover:border-b hover:border-blue"
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

      {isLoading ? (
        <IssueCardSkeleton />
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-8 mb-14">
            {issues?.map((issue) => {
              return <IssueCard data={issue} key={issue.number} />
            })}
          </ul>

          {!hasIssues && (
            <div className="flex flex-col gap-4 items-center justify-center">
              <WarningCircle size={32} />
              Não foi posssível encontrar uma issue
            </div>
          )}
        </>
      )}
    </main>
  )
}
