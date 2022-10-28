import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { BuildingSolid } from '../assets/BuildingSolid'
import { GithubBrand } from '../assets/GithubBrand'
import { UserGroup } from '../assets/UserGroup'

export function Home() {
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
            <strong className="text-2xl text-base-title">Bruno Luiz</strong>

            <a
              href="https://github.com/brunosllz"
              target="_blank"
              className=" text-blue font-bold flex items-center gap-2"
              rel="noreferrer"
            >
              GITHUB
              <ArrowSquareOut />
            </a>
          </div>

          <p className="leading-[160%]">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <GithubBrand />
              <span className="text-base-subtitle">brunosllz</span>
            </div>
            <div className="flex items-center gap-2">
              <BuildingSolid />
              <span>Rocketseat</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroup />
              <span>32 seguidores</span>
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
        <li className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors">
          <div className="flex justify-between">
            <strong className="text-base-title text-xl max-w-[280px]">
              JavaScript data types and data structures
            </strong>
            <span className="block text-sm text-base-span">Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </li>

        <li className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors">
          <div className="flex justify-between">
            <strong className="text-base-title text-xl max-w-[280px]">
              JavaScript data types and data structures
            </strong>
            <span className="block text-sm text-base-span">Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </li>

        <li className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors">
          <div className="flex justify-between">
            <strong className="text-base-title text-xl max-w-[280px]">
              JavaScript data types and data structures
            </strong>
            <span className="block text-sm text-base-span">Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </li>

        <li className="flex flex-col p-8  gap-5 bg-base-post rounded-[10px] hover:ring-1 hover:ring-base-label transition-colors">
          <div className="flex justify-between">
            <strong className="text-base-title text-xl max-w-[280px]">
              JavaScript data types and data structures
            </strong>
            <span className="block text-sm text-base-span">Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </li>
      </ul>
    </main>
  )
}
