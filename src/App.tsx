import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SkeletonTheme } from 'react-loading-skeleton'
import { RouterProvider } from 'react-router-dom'
import { queryClient } from './lib/queryClient'

import { router } from './Router'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        enableAnimation={true}
        direction="ltr"
        baseColor="#112131"
        highlightColor="#0B1B2B"
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
