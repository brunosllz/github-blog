import { Outlet } from 'react-router'

import { Logo } from '../assets/Logo'

export function DefaultLayout() {
  return (
    <div className="bg-base-background min-h-screen w-full">
      <header className="h-[296px] py-16 flex items-start justify-center bg-cover-header bg-no-repeat bg-cover">
        <Logo />
      </header>

      <Outlet />
    </div>
  )
}
