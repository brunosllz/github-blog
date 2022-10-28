import { ArrowSquareOut } from '../assets/ArrowSquareOut'
import { BuildingSolid } from '../assets/BuildingSolid'
import { GithubBrand } from '../assets/GithubBrand'
import { UserGroup } from '../assets/UserGroup'

export function Home() {
  return (
    <main className="bg-base-background max-w-[864px] mx-auto">
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
              className=" text-blue flex items-center gap-2"
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
    </main>
  )
}
