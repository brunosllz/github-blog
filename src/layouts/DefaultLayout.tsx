import { Outlet } from 'react-router'

export function DefaultLayout() {
  return (
    <div className="bg-base-background min-h-screen w-full">
      <header className="bg-background-header bg-cover bg-no-repeat h-[296px]"></header>

      <Outlet />
    </div>
  )
}
