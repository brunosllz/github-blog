import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { CaretLeft } from 'phosphor-react'
import { GithubBrand } from '../assets/GithubBrand'
import { Calendar } from '../assets/Calendar'
import { Comment } from '../assets/Comment'
import { Link } from 'react-router-dom'

export function IssueDetails() {
  return (
    <main className="bg-base-background max-w-[864px] mx-auto flex flex-col gap-12">
      <header className="py-8 px-10 flex gap-8 bg-base-profile rounded-[10px] -mt-[106px] overflow-hidden">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between mb-5">
            <Link to="/" className="flex items-center gap-2 text-blue">
              <CaretLeft size={12} weight="bold" />
              <span className="text-xs uppercase font-bold">Voltar</span>
            </Link>

            <a
              href="#"
              className=" text-blue font-bold flex items-center gap-2 text-xs"
              rel="noreferrer"
            >
              VER NO GITHUB
              <ArrowSquareOut />
            </a>
          </div>

          <strong className="leading-[160%] text-2xl text-base-title">
            JavaScript data types and data structures
          </strong>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-base-label">
              <GithubBrand />
              <span className="text-base-span">brunosllz</span>
            </div>
            <div className="flex items-center gap-2 text-base-label">
              <Calendar />
              <span className="text-base-span">Há 1 dia</span>
            </div>
            <div className="flex items-center gap-2 text-base-label">
              <Comment />
              <span className="text-base-span">5 comentários</span>
            </div>
          </div>
        </div>
      </header>

      <ul className="grid grid-cols-2 gap-8 mb-14"></ul>
    </main>
  )
}
